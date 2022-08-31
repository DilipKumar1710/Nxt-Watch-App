import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationHeader from '../NavigationHeader'
import FailureView from '../FailureView'
import PlayVideo from '../PlayVideo'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {VideoDetailsMainContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    likedButton: false,
    dislikedButton: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        channelName: data.video_details.channel.name,
        channelProfileUrl: data.video_details.channel.profile_image_url,
        channelSubscribers: data.video_details.channel.subscriber_count,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
      }
      console.log(updatedData)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickLikedButton = () => {
    this.setState(prevState => ({
      likedButton: !prevState.likedButton,
      dislikedButton: false,
    }))
  }

  onClickDisLikedButton = () => {
    this.setState(prevState => ({
      dislikedButton: !prevState.dislikedButton,
      likedButton: false,
    }))
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoDetails = () => {
    const {videoDetails, likedButton, dislikedButton} = this.state

    return (
      <PlayVideo
        videoDetails={videoDetails}
        likedButton={likedButton}
        dislikedButton={dislikedButton}
        onClickLikedButton={this.onClickLikedButton}
        onClickDisLikedButton={this.onClickDisLikedButton}
      />
    )
  }

  renderAllDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const videoBgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
          return (
            <>
              <Header />
              <NavigationHeader />
              <VideoDetailsMainContainer
                videoBgColor={videoBgColor}
                data-testid="videoItemDetails"
              >
                {this.renderAllDetails()}
              </VideoDetailsMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
