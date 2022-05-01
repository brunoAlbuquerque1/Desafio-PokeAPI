import React from "react";

import {
  Container,
  ProductDescription,
  FavoriteICon,
  NotFavoriteICon,
  ViewFavorite,
} from "./styles";

const CardPokemon = (pokemon) => {
  return (
    <Container>
      <ViewFavorite>
        <FavoriteICon />
      </ViewFavorite>
      <img src={pokemon.img} alt={pokemon.name} />
      <ProductDescription>
        <h4>{pokemon.name}</h4>
      </ProductDescription>
    </Container>
  );
};

export default CardPokemon;
