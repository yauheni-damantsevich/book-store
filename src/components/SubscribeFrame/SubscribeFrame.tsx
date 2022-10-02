import React from "react";
import {
  Button,
  Form,
  FormWrapper,
  H4,
  Input,
  SubscribeDescription,
  SubscribeWrapper,
  Title,
} from "./subscribeFrame.styled";

export const SubscribeFrame = () => {
  return (
    <SubscribeWrapper>
      <H4>Subscribe to Newsletter</H4>
      <SubscribeDescription>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </SubscribeDescription>
      <Form>
        <FormWrapper>
          <Input type="email" placeholder="Your Email" />
          <Button type="submit">
            <Title>Subscribe</Title>
          </Button>
        </FormWrapper>
      </Form>
    </SubscribeWrapper>
  );
};
