import React from "react";
import Logo from "../Logo/logo";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <Logo />
      <S.ContainerAuthor>
        <S.TextNameAuthor>
          Teste Realizado por : Bruno Albuquerque Carneiro{" "}
        </S.TextNameAuthor>
        <S.TextNameAuthorLinkedin
          target="_blank"
          href="http://www.linkedin.com/in/bruno-albuquerque-12051093"
        >
          Linkedin: www.linkedin.com/in/bruno-albuquerque-12051093
        </S.TextNameAuthorLinkedin>
      </S.ContainerAuthor>
    </S.Container>
  );
};

export default Footer;
