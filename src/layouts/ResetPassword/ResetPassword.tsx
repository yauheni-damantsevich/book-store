import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import {
  Container,
  ErrorMassage,
  Form,
  H1,
  Input,
  Label,
  MainWrapper,
  Massage,
  Span,
  SubmitButton,
  Wrapper,
} from "./resetPassword.styled";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  const handleSubmitResetPassword = (event: React.FormEvent): void => {
    event.preventDefault();
    setErrorMessage(" ");
    sendPasswordResetEmail(auth, email).catch((error) =>
      setErrorMessage(error.message)
    );
  };
  return (
    <Container>
      <MainWrapper>
        <Form onSubmit={handleSubmitResetPassword}>
          <H1></H1>
          <Wrapper>
            <ErrorMassage>
              {errorMessage === " " ? (
                <Massage>
                  You will receive an email <Span>{email}</Span> with a link to
                  reset your password!
                </Massage>
              ) : (
                errorMessage
              )}
            </ErrorMassage>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your Email"
              type="email"
              id="signInEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>
          {errorMessage !== " " ? (
            <SubmitButton
              type="submit"
              onClick={(event: React.FormEvent) =>
                handleSubmitResetPassword(event)
              }
            >
              reset
            </SubmitButton>
          ) : (
            <SubmitButton type="submit" onClick={() => navigate("/")}>
              Go To Home
            </SubmitButton>
          )}
        </Form>
      </MainWrapper>
    </Container>
  );
};
