import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Container, Content } from "./styles";

const DefaultTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
