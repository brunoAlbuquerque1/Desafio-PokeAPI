import React from "react";
import Header from "../Header";
import { Container, Content } from "./styles";

const DefaultTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default DefaultTemplate;
