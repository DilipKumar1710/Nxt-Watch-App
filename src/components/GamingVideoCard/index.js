import {
  GameCard,
  GameThumbnailImage,
  GameTitle,
  GameViews,
  GameLink,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const GamingVideoCard = props => {
  const {gameDetails} = props

  const {id, title, thumbnailUrl, viewCount} = gameDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#ffffff' : '#231f20'
        return (
          <GameLink to={`/videos/${id}`}>
            <GameCard>
              <GameThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle textColor={textColor}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </GameCard>
          </GameLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingVideoCard
