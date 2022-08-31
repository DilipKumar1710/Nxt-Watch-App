import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarBg = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const HeaderLogo = styled.img`
  width: 120px;
  height: 28px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  flex-grow: 1;
`
export const HamburgerCloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  height: 30px;
  width: 30px;
  background-color: transparent;
  margin-top: 32px;
`
export const HamburgerMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  width: 300px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
export const MenuItemContainer = styled.li`
  display: flex;
  align-items: center;
  align-self: flex-start;
  list-style-type: none;
`
export const MenuItem = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`
