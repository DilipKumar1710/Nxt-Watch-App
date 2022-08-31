import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const VideoCardItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
  width: 100%;
`
export const ProfileImgAndTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-top: 15px;
`
export const Title = styled.p`
  color: ${props => props.textColor}
  font-family: 'Roboto';
  font-size: 16px;
`
export const ChannelAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    padding-left: 30px;
  }
`
export const ChannelName = styled.p`
  color: ${props => props.textColor}
  font-family: 'Roboto';
  font-size: 14px;
`
export const ViewsCountAndDate = styled.p`
  color: ${props => props.textColor}
  font-family: 'Roboto';
  font-size: 13px;
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
