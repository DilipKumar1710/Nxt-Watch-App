import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  overflow: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const SavedVideosHeadingContainer = styled.div`
  background-color: ${props => props.headingBgColor};
  height: 100px;
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 180px;
    padding-left: 50px;
  }
`
export const SavedVideosIconContainer = styled.div`
  background-color: ${props => props.savedIconBgColor};
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`
export const SavedVideosHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-right: 15px;
  width: 100%;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    margin-left: 20px;
  }
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImage = styled.img`
  margin-top: 180px;
  height: 200px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`
export const NoSavedHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const NoSavedDescription = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
