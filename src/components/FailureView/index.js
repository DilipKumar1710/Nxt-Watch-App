import {
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryButton = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImgUrl} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong.
            </FailureHeading>
            <FailureDescription noteColor={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
              <br />
              Please try again later.
            </FailureDescription>
            <FailureButton type="button" onClick={onClickRetryButton}>
              Retry
            </FailureButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
