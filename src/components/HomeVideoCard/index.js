import {
  NavLink,
  VideoCardItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImgAndTitle,
  ProfileImage,
  Title,
  ChannelAndDateContainer,
  ChannelName,
  ViewsCountAndDate,
  Dot,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoCardItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImgAndTitle>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <Title textColor={textColor}>{title}</Title>
                </ProfileImgAndTitle>
                <ChannelAndDateContainer>
                  <ChannelName textColor={textColor}>{name}</ChannelName>
                  <ViewsCountAndDate textColor={textColor}>
                    {viewCount} views
                    <Dot>&#8226;</Dot> {publishedAt}
                  </ViewsCountAndDate>
                </ChannelAndDateContainer>
              </VideoDetails>
            </VideoCardItem>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
