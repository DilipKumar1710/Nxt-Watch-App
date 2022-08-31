import {
  VideoCardContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
} from './styledComponents'
import HomeVideoCard from '../HomeVideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeVideosList = props => {
  const {homeVideos, onRetry} = props

  const videosCards = homeVideos.length

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCards > 0 ? (
          <VideoCardContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideoCardContainer>
        ) : (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={onClickRetryButton}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideosList
