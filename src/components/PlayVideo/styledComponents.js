import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
`
export const PlayVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.videoTextColor};
  font-weight: 500;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoViewsAndDate = styled.p`
  color: #616e7c;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen (min-width: 768px) {
    font-size: 14px;
  }
`
export const PlayVideoDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const LikedAndSavedButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const LikedButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.likedColor};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  @media screen (min-width: 768px) {
    font-size: 16px;
  }
`
export const DislikedButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.dislikedColor};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  @media screen (min-width: 768px) {
    font-size: 16px;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.saveColor};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  @media screen (min-width: 768px) {
    font-size: 16px;
  }
`
export const ChannelLogoAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`
export const ChannelLogoImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  @media screen (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`
export const TitleAndSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ChannelName = styled.p`
  color: ${props => props.videoTextColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ChannelSubscribers = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
export const ChannelDescription = styled.p`
  color: ${props => props.videoTextColor};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
    font-size: 14px;
  }
`
