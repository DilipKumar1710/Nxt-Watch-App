import Header from '../Header'
import NavigationHeader from '../NavigationHeader'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#231f20'

      const failureImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NavigationHeader />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundImage src={failureImage} alt="not found" />
            <NotFoundHeading textColor={textColor}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
