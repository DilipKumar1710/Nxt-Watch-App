import {
  LinkItem,
  VideoCardItem,
  ThumbnailImage,
  VideoItemContent,
  VideoChannelLogo,
  VideoItemDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const TrendingVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewsCount,
    publishedAt,
    channelProfileUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#231f20'
        return (
          <LinkItem to={`/videos/${id}`}>
            <VideoCardItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemContent>
                <VideoChannelLogo src={channelProfileUrl} alt="channel logo" />
                <VideoItemDetails>
                  <VideoTitle textColor={textColor}>{title}</VideoTitle>
                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDate>
                    {viewsCount} views <Dot>&#8226;</Dot> {publishedAt}
                  </ViewsAndDate>
                </VideoItemDetails>
              </VideoItemContent>
            </VideoCardItem>
          </LinkItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingVideoCard
