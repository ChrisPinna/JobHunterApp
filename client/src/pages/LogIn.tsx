import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  color: #fe7a1b;
  padding: 3rem;
`;
const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
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
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  &:hover {
    cursor: pointer;
  }
`;
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
`;
const LoginPrompt = styled.span`
  font-size: 12px;
  color: blue;
  text-decoration: underline;
`;
const PasswordMessage = styled.span`
  color: red;
`

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLogin) {
      if(password === confirmPassword) {
        const user = {
          first_name: firstName,
          last_name: lastName,
          email,
          password
        }
        try {
          await axios.post('/auth/register', user);
        } catch (error) {
          console.log(error);
        };
      } else {
        setPasswordsMatch(false);
      };
    }
  }

  return (
    <Container>
      <Wrapper>
        {isLogin ? (
          <>
            <Header>Log In!</Header>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Email"
                type="email"
                style={{ width: "100%" }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                type="password"
                style={{ width: "100%" }}
              />
              <BottomContainer>
                <LoginPrompt onClick={() => setIsLogin(false)}>
                  Don't have an account? Sign up here!
                </LoginPrompt>
                <SubmitButton type="submit">Sign Up</SubmitButton>
              </BottomContainer>
            </Form>
          </>
        ) : (
          <>
            <Header>Sign Up to Job Hunter</Header>
            <Form onSubmit={handleSubmit}>
              <InputContainer>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </InputContainer>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                type="email"
                style={{ width: "100%" }}
              />
              <InputContainer>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  type="password"
                />
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm Password"
                  type="password"
                />
              </InputContainer>
              {!passwordsMatch && <PasswordMessage>*Passwords do not match!</PasswordMessage>}
              <BottomContainer>
                <LoginPrompt onClick={() => setIsLogin(true)}>
                  Already have an account? Click here to log in
                </LoginPrompt>
                <SubmitButton type="submit">Sign Up</SubmitButton>
              </BottomContainer>
            </Form>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Login;
