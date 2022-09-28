import React, { useState } from "react";
import {
  Container,
  Back,
  H1,
  H2,
  Form,
  MainWrapper,
  Wrapper,
  Label,
  Input,
  SubmitWrapper,
  Submit,
  Cancel,
  SectionWrapper,
} from "./account.styled";
import backIcon from "../../assets/Back.svg";
import { useAppDispatch } from "../../store/rootStore";

export const Account = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Back to="/"></Back>
      <img src={backIcon} alt="Back" />
      <H1>Account</H1>
      <Form>
        <SectionWrapper>
          <H2>Profile</H2>
          <MainWrapper>
            <Wrapper>
              <Label htmlFor="username">Name</Label>
              <Input
                placeholder="Your Name"
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Input>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Your Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Wrapper>
          </MainWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <H2>Password</H2>
          <MainWrapper>
            <Wrapper>
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </Wrapper>
          </MainWrapper>
          <MainWrapper>
            <Wrapper>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                placeholder="New Password"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></Input>
            </Wrapper>
            <Wrapper>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Input>
            </Wrapper>
          </MainWrapper>
        </SectionWrapper>

        <SubmitWrapper>
          <Submit onClick={() => dispatch()}>Save Changes</Submit>
          <Cancel>Cancel</Cancel>
        </SubmitWrapper>
      </Form>
    </Container>
  );
};
