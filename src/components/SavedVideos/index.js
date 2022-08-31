import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationHeader from '../NavigationHeader'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const SavedVideos = () => (
  <ThemeAndVideoContext>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#231f20'
      const headingBgColor = isDarkTheme ? '#231f20' : '#ebebeb'
      const savedIconBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

      const renderSavedVideos = () => {
        const isVideosSaved = savedVideos.length

        return isVideosSaved > 0 ? (
          <SavedVideoList data-testid="savedVideos">
            {savedVideos.map(eachVideo => (
              <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </SavedVideoList>
        ) : (
          <NoSavedVideosView>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeading textColor={textColor}>
              No saved videos found
            </NoSavedHeading>
            <NoSavedDescription>
              You can save your videos while watching them
            </NoSavedDescription>
          </NoSavedVideosView>
        )
      }

      return (
        <>
          <Header />
          <NavigationHeader />
          <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideosHeadingContainer headingBgColor={headingBgColor}>
              <SavedVideosIconContainer savedIconBgColor={savedIconBgColor}>
                <CgPlayListAdd size="35" color=" #ff0000" />
              </SavedVideosIconContainer>
              <SavedVideosHeading textColor={textColor}>
                Saved Videos
              </SavedVideosHeading>
            </SavedVideosHeadingContainer>
            {renderSavedVideos()}
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeAndVideoContext>
)

export default SavedVideos
