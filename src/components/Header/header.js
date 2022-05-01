import React from "react";
import Favorites from "./Favorites";
import Logo from "../Logo/logo";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <Logo />
        <Favorites />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Header;
