import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Form,
  Input,
  Label,
  MainWrapper,
  Navigation,
  SignIn,
  SignInTitleButton,
  SignUpTitleButton,
  ForgotPasswordButton,
  SignUp,
  SubmitButton,
} from "./login.styled";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : "";

  const handleSubmitSignIn = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  const handleSubmitSignUp = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <Container>
      <MainWrapper>
        <Navigation>
          <SignInTitleButton
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
          >
            Sign In
          </SignInTitleButton>
          <SignUpTitleButton
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
          >
            Sign Up
          </SignUpTitleButton>
        </Navigation>
        <SignIn className={`panel ${checkActive(1, "active")}`}>
          <Form onSubmit={handleSubmitSignIn}>
            <Wrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Your Email"
                type="email"
                id="signInEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Your Password"
                type="password"
                id="signInPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Wrapper>
            <ForgotPasswordButton to="/reset_password">
              Forgot password?
            </ForgotPasswordButton>
            <SubmitButton type="submit">Sign In</SubmitButton>
          </Form>
        </SignIn>
        <SignUp className={`panel ${checkActive(2, "active")}`}>
          <Form onSubmit={handleSubmitSignUp}>
            <Wrapper>
              <Label htmlFor="username">Username</Label>
              <Input
                placeholder="Your Name"
                type="username"
                id="signUpUsername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Your Email"
                type="email"
                id="SignUpEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Your Password"
                type="password"
                id="SignUpPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Wrapper>
            <Wrapper>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                placeholder="Confirm Password"
                type="password"
                id="SignUpConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Wrapper>
            <SubmitButton type="submit">Sign Up</SubmitButton>
          </Form>
        </SignUp>
      </MainWrapper>
    </Container>
  );
};
