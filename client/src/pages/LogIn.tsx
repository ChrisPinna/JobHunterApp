import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10rem;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Header = styled.h1`
  color: #fe7a1b;
  padding: 3rem;
`
const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 2rem;
  width: 15rem;
  margin-bottom: 1rem;
  border: none;
  background-color: #eee9e9;
  &:hover {
    background-color: #dfdbdb;
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
      cursor: pointer;
  }
`
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  &:hover {
    cursor: pointer;
  }
`
const SubmitButton = styled.button`
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem;
  background-color: transparent;
  background: linear-gradient(to bottom, #fe7a1b, #ffaf1c);
  &:hover {
    background-color: transparent;
    background: linear-gradient(to bottom, #fe7a1b, #ffaf1c);
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, -12px 14px 20px -19px rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`
const LoginPrompt = styled.span`
  font-size: 12px;
  color: blue;
  text-decoration: underline;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Header>Welcome to Job Hunter</Header>
            <Form>
                <InputContainer>
                  <Input placeholder='First Name' />
                  <Input placeholder='Last Name'/>
                </InputContainer>
                <Input placeholder='Email' type="email" style={{width: "100%"}}/>
                <InputContainer>
                  <Input placeholder='Password' type="password"/>
                  <Input placeholder='Confirm Password' type="password"/>
                </InputContainer>
                <BottomContainer>
                <LoginPrompt>Already have an account? Click here to log in</LoginPrompt>
                <SubmitButton>Sign Up</SubmitButton>
                </BottomContainer>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login