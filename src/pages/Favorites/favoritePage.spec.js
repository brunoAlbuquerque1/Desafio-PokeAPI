import React from "react";
import { render, screen } from "@testing-library/react";
import * as hookFavorite from "../../hooks/Favorites/FavoritesHook";
import Favorite from "./favoritePage";

const mockPokemon = {
  id: 1,
  name: "pokemon name",
  image: "image",
};

describe("pokemon page component tests", () => {
  test("renders without items on pokemon", async () => {
    jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
      pokemonFavorited: [],
      addFavorite: jest.fn(),
      Removefavorite: jest.fn(),
    });

    render(<Favorite />);

    expect(screen.getByTestId("empty_pokemon_favorite")).toBeInTheDocument();
  });

  test("renders with items on pokemon", () => {
    jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
      pokemonFavorited: [{ ...mockPokemon }],
      addFavorite: jest.fn(),
      Removefavorite: jest.fn(),
    });

    render(<Favorite />);

    const itemOnpokemon = screen.getByText("pokemon name");

    expect(itemOnpokemon).toBeInTheDocument();
  });
});
