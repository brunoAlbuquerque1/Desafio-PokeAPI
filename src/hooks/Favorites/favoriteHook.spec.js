import React from "react";
import { waitFor, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";

import {
  FavoriteProvider,
  useFavorite,
} from "../../hooks/Favorites/FavoritesHook";

describe("Teste do hook Cart", () => {
  test("Adicionar um produto no localStorage e recuperar esse produto com o getItem", async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper: FavoriteProvider,
    });

    const mockPokemon = {
      id: 1,
      name: "pokemon name",
      image: "image",
    };
    /* Adicionando o produto no carrinho */
    act(() => {
      result.current.addFavorite(mockPokemon);
    });
    /* Espero que o item com o nome Product Test esteja no carrinho */
    await waitFor(() => {
      expect(result.current.pokemonFavorited[0].name).toEqual("pokemon name");
    });
  });
});
