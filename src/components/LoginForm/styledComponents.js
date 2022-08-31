import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
`

export const LoginContainer = styled.form`
  background-color: ${props => props.formBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`

export const LoginLogo = styled.img`
  height: 30px;
  width: 120px;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  background-color: ${props => props.formBgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`
export const Label = styled.label`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
`
export const Input = styled.input`
  background-color: ${props => props.formBgColor};
  border: 1px solid #e2e8f0;
  height: 40px;
  border-radius: 8px;
  font-family: 'Roboto';
  padding: 20px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const CheckBox = styled.input`
  background-color: ${props => props.formBgColor};
  height: 16px;
  width: 16px;
  margin-right: 10px;
`
export const ShowPassword = styled.label`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const LoginPassword = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 15px;
  align-self: flex-start;
  margin-top: 5px;
`
