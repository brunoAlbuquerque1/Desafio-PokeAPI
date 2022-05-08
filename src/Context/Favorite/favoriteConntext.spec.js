import { waitFor, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";

import { FavoriteProvider } from "../Favorite/contextFavorite";

import { useFavorite } from "../../hooks/useFavorite/useFavorite";

describe("Test hook pokemon", () => {
  test("add pokemon in provider", async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper: FavoriteProvider,
    });

    const mockPokemon = {
      id: 1,
      name: "pokemon name",
      image: "image",
    };
    act(() => {
      result.current.addFavorite(mockPokemon);
    });
    await waitFor(() => {
      expect(result.current.pokemonFavorited[0].name).toEqual("pokemon name");
    });
  });
});
