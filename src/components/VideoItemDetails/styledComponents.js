import styled from 'styled-components'

export const VideoDetailsMainContainer = styled.div`
  background-color: ${props => props.videoBgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  min-height: 100vh;
  overflow: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
