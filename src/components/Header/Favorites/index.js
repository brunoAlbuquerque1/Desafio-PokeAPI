import React from "react";
import * as S from "./styles";

const Favorites = () => {
  return (
    <div>
      <S.ViewText data-testid="link-favorites" to="/favorites">
        <div>
          <S.TextFavorites>Favoritos</S.TextFavorites>
          <S.NumberFavorites>0</S.NumberFavorites>
        </div>
      </S.ViewText>
    </div>
  );
};

export default Favorites;
