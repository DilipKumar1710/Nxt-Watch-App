import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureViewImage = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => props.headingColor}
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 600;
  text-align:center;
`
export const FailureDescription = styled.p`
  color:${props => props.noteColor}
  font-family: 'Roboto';
  font-size: 20px;
  text-align:center;
`
export const FailureButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
