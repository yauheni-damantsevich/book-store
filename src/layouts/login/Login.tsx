import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  ErrorMassage,
} from "./login.styled";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { userActions } from "../../store/user.silce";
import { useAppDispatch } from "../../store/rootStore";
import { useSelector } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const checkActive = (index: number, className: string) =>
    activeIndex === index ? className : "";

  const user = useSelector((state: any) => state.user.userData);
  const navigate = useNavigate();

  const handleSubmitSignIn = (event: React.FormEvent): void => {
    event.preventDefault();
    signIn();
    if (user) {
      navigate("/account");
    } else {
      setEmail("");
      setPassword("");
    }
  };
  const handleSubmitSignUp = (event: React.FormEvent): void => {
    event.preventDefault();
    createUser();
  };

  const auth = getAuth();
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setPersistence(auth, browserSessionPersistence);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          userActions.login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });
  }, []);

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
            <ErrorMassage>
              {errorMessage === "" ? "" : errorMessage}
            </ErrorMassage>
            <SubmitButton
              type="submit"
              onClick={(event) => handleSubmitSignIn(event)}
            >
              Sign In
            </SubmitButton>
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
            <ErrorMassage>
              {errorMessage === "" ? "" : errorMessage}
            </ErrorMassage>
            <SubmitButton
              type="submit"
              onClick={(event) => handleSubmitSignUp(event)}
            >
              Sign Up
            </SubmitButton>
          </Form>
        </SignUp>
      </MainWrapper>
    </Container>
  );
};
