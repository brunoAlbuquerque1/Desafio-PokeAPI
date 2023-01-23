import React from "react";
import * as S from "./styles";

const Logo = () => {
  return (
    <>
      <S.ViewImage to="/">
        <S.Image
          alt="logo pokemon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </S.ViewImage>
      <S.ViewText>
        <S.TextOff> PokemonAPi</S.TextOff>
      </S.ViewText>
    </>
  );
};

export default Logo;
