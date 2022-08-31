import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {
  VideoDetailsContainer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  VideoViewsAndDate,
  PlayVideoDot,
  LikedAndSavedButtonsContainer,
  LikedButton,
  DislikedButton,
  Button,
  ChannelLogoAndTitleContainer,
  ChannelLogoImage,
  TitleAndSubscribersContainer,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const PlayVideo = props => {
  const {
    videoDetails,
    likedButton,
    dislikedButton,
    onClickLikedButton,
    onClickDisLikedButton,
  } = props

  const {
    description,
    channelName,
    channelProfileUrl,
    channelSubscribers,
    publishedAt,
    title,
    viewCount,
    videoUrl,
  } = videoDetails

  const ClickedLikedButton = () => {
    onClickLikedButton()
  }

  const ClickedDisLikedButton = () => {
    onClickDisLikedButton()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addVideoItem} = value

        const videoTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const likedColor = likedButton ? '#2563eb' : '#64748b'
        const dislikedColor = dislikedButton ? '#2563eb' : '#64748b'
        let isSaved

        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const onClickSavedButton = () => {
          addVideoItem(videoDetails)
        }

        const saveColor = isSaved ? '#2563eb' : '#64748b'
        const saveText = isSaved ? 'Saved' : 'Save'

        return (
          <VideoDetailsContainer>
            <ReactPlayer url={videoUrl} controls width="100%" height="70vh" />
            <PlayVideoTitle videoTextColor={videoTextColor}>
              {title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <VideoViewsAndDate>
                {viewCount} views <PlayVideoDot>&#8226;</PlayVideoDot>{' '}
                {publishedAt}
              </VideoViewsAndDate>
              <LikedAndSavedButtonsContainer>
                <LikedButton
                  type="button"
                  onClick={ClickedLikedButton}
                  likedColor={likedColor}
                >
                  <AiOutlineLike size="25" />
                  Like
                </LikedButton>
                <DislikedButton
                  type="button"
                  onClick={ClickedDisLikedButton}
                  dislikedColor={dislikedColor}
                >
                  <AiOutlineDislike size="25" />
                  Dislike
                </DislikedButton>
                <Button
                  type="button"
                  onClick={onClickSavedButton}
                  saveColor={saveColor}
                >
                  <BiListPlus size="25" />
                  {saveText}
                </Button>
              </LikedAndSavedButtonsContainer>
            </PlayVideoStatusContainer>
            <hr color=" #cbd5e1" width="100%" />
            <ChannelLogoAndTitleContainer>
              <ChannelLogoImage src={channelProfileUrl} alt="channel logo" />
              <TitleAndSubscribersContainer>
                <ChannelName videoTextColor={videoTextColor}>
                  {channelName}
                </ChannelName>
                <ChannelSubscribers>{channelSubscribers}</ChannelSubscribers>
              </TitleAndSubscribersContainer>
            </ChannelLogoAndTitleContainer>
            <ChannelDescription videoTextColor={videoTextColor}>
              {description}
            </ChannelDescription>
          </VideoDetailsContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideo
