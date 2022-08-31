import styled from 'styled-components'

export const GamingMainContainer = styled.div`
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
export const GamingHeadingContainer = styled.div`
  background-color: ${props => props.headingBgColor};
  height: 180px;
  width: 100%;
  padding-left: 50px;
  display: flex;
  align-items: center;
`
export const GamingIconContainer = styled.div`
  background-color: ${props => props.gameIconBgColor};
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
export const GamingHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 600px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const GamingCardsList = styled.ul`
  display: flex;
  flex-wrap:wrap;
  margin-top: 30px;
  width: 100%;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 20px;
`
