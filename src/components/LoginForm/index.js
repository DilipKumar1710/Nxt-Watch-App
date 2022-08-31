import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginMainContainer,
  LoginContainer,
  LoginLogo,
  InputContainer,
  Label,
  Input,
  ShowPasswordContainer,
  CheckBox,
  ShowPassword,
  LoginPassword,
  ErrorMessage,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, ('expires': 30))
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {
      showErrorMsg,
      errorMsg,
      password,
      showPassword,
      username,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const inputType = showPassword ? 'text' : 'password'

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'

          const formBgColor = isDarkTheme ? '#181818' : '#ffffff'

          const textColor = isDarkTheme ? '#ffffff' : '#181818'

          const formLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer bgColor={bgColor}>
              <LoginContainer
                onSubmit={this.onSubmitUserDetails}
                formBgColor={formBgColor}
              >
                <LoginLogo src={formLogo} alt="website logo" />
                <InputContainer formBgColor={formBgColor}>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    id="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer formBgColor={formBgColor}>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    id="password"
                    value={password}
                    type={inputType}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <CheckBox
                      id="checkbox"
                      type="checkbox"
                      onChange={this.onChangeCheckbox}
                    />
                    <ShowPassword htmlFor="checkbox" textColor={textColor}>
                      Show Password
                    </ShowPassword>
                  </ShowPasswordContainer>
                </InputContainer>
                <LoginPassword type="submit">Login</LoginPassword>
                {showErrorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default LoginForm
