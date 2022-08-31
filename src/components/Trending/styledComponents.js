import styled from 'styled-components'

export const TrendingViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  min-height: 100vh;
  overflow: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TrendingHeadingContainer = styled.div`
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
export const FireIconContainer = styled.div`
  background-color: ${props => props.fireIconBgColor};
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
export const TrendingHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideosList = styled.ul`
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
