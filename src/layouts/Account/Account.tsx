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
  BottomWrapper,
  Logout,
} from "./account.styled";
import backIcon from "../../assets/Back.svg";
import { useAppDispatch } from "../../store/rootStore";
import { onAuthStateChanged, updatePassword } from "firebase/auth";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { useSelector } from "react-redux";
import { userActions } from "../../store/user.silce";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const user = useSelector((state: any) => state.user.userData);
  // user.displayName
  const [username, setUsername] = useState("");
  // user.email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();
  const submitChanges = () => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        updateProfile(user, { displayName: username });
        updateEmail(user, email);
        updatePassword(user, password);
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitChanges();
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userActions.logout());
    auth.signOut();
    navigate("/");
  };

  return (
    <Container>
      <Back onClick={() => navigate(-1)}>
        <img src={backIcon} alt="Back" />
      </Back>
      <H1>Account</H1>
      <Form onSubmit={handleSubmit}>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
        <BottomWrapper>
          <Logout type="button" onClick={() => logout()}>
            Logout
          </Logout>
          <SubmitWrapper>
            <Submit type="submit">Save Changes</Submit>
            <Cancel type="button">Cancel</Cancel>
          </SubmitWrapper>
        </BottomWrapper>
      </Form>
    </Container>
  );
};
