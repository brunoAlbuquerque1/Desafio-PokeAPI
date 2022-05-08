import React, { useState } from "react";
import CardPokemon from "../../components/CardPokemon/cardPokemon";
import * as S from "./styles";
import { useFavorite } from "../../hooks/useFavorite/useFavorite";

export default function Favorite() {
  const { pokemonFavorited } = useFavorite();

  if (pokemonFavorited.length === 0) {
    return (
      <S.ContainerEmpty data-testid="empty_pokemon_favorite">
        <S.TextEmpty>Nenhum pokemon favoritado</S.TextEmpty>
      </S.ContainerEmpty>
    );
  }

  return (
    <S.Container>
      <S.List>
        {pokemonFavorited.map((item) => (
          <CardPokemon
            data-testid="card_pokemon"
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
          />
        ))}
      </S.List>
    </S.Container>
  );
}
