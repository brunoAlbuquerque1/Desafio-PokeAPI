import React from "react";
import * as S from "./styles";
import { useFavorite } from "../../../hooks/Favorites/FavoritesHook";

const Favorites = () => {
  const { pokemonFavorited } = useFavorite();

  return (
    <S.ViewText data-testid="link-favorites" to="/favorites">
      <div>
        <S.TextFavorites>Favoritos</S.TextFavorites>
        <S.NumberFavorites>{pokemonFavorited.length}</S.NumberFavorites>
      </div>
    </S.ViewText>
  );
};

export default Favorites;
