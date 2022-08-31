import styled from 'styled-components'

export const VideoCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 200px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor}
  font-family: 'Roboto';
  font-size: 30px;
`
export const NoVideosDescription = styled.p`
  color: ${props => props.noteColor}
  font-family: 'Roboto';
  font-size: 16px;
  font-weight:500;
  margin-top:10px;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: 'Roboto';
  font-size: 15px;
`
