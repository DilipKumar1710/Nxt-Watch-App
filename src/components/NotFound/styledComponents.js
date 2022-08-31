import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
  }
`
export const NotFoundHeading = styled.h1`
  color:${props => props.textColor};
  font-size:20px;
  font-weight:600px
  font-family:"Roboto";
  text-align:center;
  @media screen and (min-width:768px){
      font-size:35px;
  }
`
export const NotFoundDescription = styled.p`
  color:#cbd5e1;
  font-size:14px;
  font-weight:600px
  font-family:"Roboto";
  text-align:center;
  @media screen and (min-width:768px){
      font-size:20px;
  }
`
