import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import NavigationHeader from '../NavigationHeader'
import GamingVideoCard from '../GamingVideoCard'
import FailureView from '../FailureView'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GamingMainContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingHeading,
  GamingCardsList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamesList()
  }

  getGamesList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachGame => ({
        id: eachGame.id,
        title: eachGame.title,
        thumbnailUrl: eachGame.thumbnail_url,
        viewCount: eachGame.view_count,
      }))

      console.log(updatedData)

      this.setState({
        gamesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getGamesList()
  }

  renderGamingCardList = () => {
    const {gamesList} = this.state

    return (
      <GamingCardsList>
        {gamesList.map(eachGame => (
          <GamingVideoCard key={eachGame.id} gameDetails={eachGame} />
        ))}
      </GamingCardsList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderAllDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingCardList()
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

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#ffffff' : '#231f20'
          const headingBgColor = isDarkTheme ? '#231f20' : '#ebebeb'
          const gameIconBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'
          return (
            <>
              <Header />
              <NavigationHeader />
              <GamingMainContainer data-testid="gaming" bgColor={bgColor}>
                <GamingHeadingContainer headingBgColor={headingBgColor}>
                  <GamingIconContainer gameIconBgColor={gameIconBgColor}>
                    <SiYoutubegaming size="35" color="#ff0000" />
                  </GamingIconContainer>
                  <GamingHeading textColor={textColor}>Gaming</GamingHeading>
                </GamingHeadingContainer>
                {this.renderAllDetailsView()}
              </GamingMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
