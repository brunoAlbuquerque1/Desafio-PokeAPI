import React, { memo } from "react";
import { useFavorite } from "../../hooks/useFavorite/useFavorite";

import {
  Container,
  ProductDescription,
  FavoriteICon,
  NotFavoriteICon,
  ViewFavorite,
} from "./styles";

const CardPokemon = (pokemon) => {
  const { addFavorite, pokemonFavorited } = useFavorite();
  const favorited = pokemonFavorited?.find((e) => pokemon.id === e.id);

  return (
    <Container onClick={pokemon.onClickViewPokemon}>
      <ViewFavorite
        data-testid="button_favorite"
        onClick={() => {
          addFavorite(pokemon);
        }}
      >
        {favorited ? (
          <div data-testid="favorite_Icon">
            <FavoriteICon />
          </div>
        ) : (
          <div data-testid="not_favorite_Icon">
            <NotFavoriteICon />
          </div>
        )}
      </ViewFavorite>
      <img src={pokemon.img} alt={pokemon.name} />
      <ProductDescription>
        <h4>{pokemon.name}</h4>
      </ProductDescription>
    </Container>
  );
};

export default memo(CardPokemon);
