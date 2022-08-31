import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  list-style-type: none;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ThumbnailImage = styled.img`
  height: 100%;
  width: 500px;
  padding-right: 30px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const VideoItemContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const VideoItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const VideoChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const ChannelName = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ViewsAndDate = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
