import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 200px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 400px;
  }
`
export const GameThumbnailImage = styled.img`
  width: 100%;
  height: 230px;
  @media screen and (min-width: 768px) {
    height: 330px;
  }
`
export const GameTitle = styled.p`
  color: ${props => props.textColor};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const GameViews = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
