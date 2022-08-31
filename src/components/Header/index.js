import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarBg,
  MenuIcon,
  LogoLink,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogoutIconButton,
  LogoutButton,
  ProfileImage,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
  HamburgerMenuContainer,
  HamburgerCloseButton,
  HamburgerMenuList,
  LinkItem,
  MenuItemContainer,
  MenuItem,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#3b82f6'
      const bgColor = isDarkTheme ? '#181818' : '#ffffff'

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarBg bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onClickChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <MenuIcon>
                  <GiHamburgerMenu size={25} />
                </MenuIcon>
              }
            >
              {close => (
                <HamburgerMenuContainer>
                  <HamburgerCloseButton type="button" onClick={() => close()}>
                    <IoMdClose size={25} />
                  </HamburgerCloseButton>
                  <HamburgerMenuList>
                    <LinkItem to="/">
                      <MenuItemContainer>
                        <AiFillHome size={30} />
                        <MenuItem>Home</MenuItem>
                      </MenuItemContainer>
                    </LinkItem>
                    <LinkItem to="/trending">
                      <MenuItemContainer>
                        <HiFire size={30} />
                        <MenuItem>Trending</MenuItem>
                      </MenuItemContainer>
                    </LinkItem>
                    <LinkItem to="/gaming">
                      <MenuItemContainer>
                        <SiYoutubegaming size={30} />
                        <MenuItem>Gaming</MenuItem>
                      </MenuItemContainer>
                    </LinkItem>
                    <LinkItem to="/saved-videos">
                      <MenuItemContainer>
                        <CgPlayListAdd size={30} />
                        <MenuItem>Saved videos</MenuItem>
                      </MenuItemContainer>
                    </LinkItem>
                  </HamburgerMenuList>
                </HamburgerMenuContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarBg>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
