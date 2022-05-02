import React from "react";
import { render, screen } from "@testing-library/react";
import * as hookFavorite from "../../hooks/Favorites/FavoritesHook";
import Favorite from "./favoritePage";

const mockPokemon = {
  id: 1,
  name: "pokemon name",
  image: "image",
};

describe("Cart page component tests", () => {
  test("renders without items on cart", async () => {
    jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
      pokemonFavorited: [],
      addFavorite: jest.fn(),
      Removefavorite: jest.fn(),
    });

    render(<Favorite />);

    expect(screen.getByTestId("empty_pokemon_favorite")).toBeInTheDocument();
  });

  test("renders with items on cart", () => {
    jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
      pokemonFavorited: [{ ...mockPokemon }],
      addFavorite: jest.fn(),
      Removefavorite: jest.fn(),
    });

    render(<Favorite />);

    const itemOnCart = screen.getByText("pokemon name");

    expect(itemOnCart).toBeInTheDocument();
  });

  //   test("remove item to cart", async () => {
  //     jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
  //       products: [{ ...mockPokemon }],
  //       getTotalPrice: 20,
  //       addFavorite: jest.fn(),
  //       Removefavorite: mockPokemon,
  //     });

  //     const { getByTestId } = render(<Cart />);

  //     const itemToBeRemoved = getByTestId("remove_item_cart");
  //     userEvent.click(itemToBeRemoved);

  //     expect(mockPokemon).toBeCalledTimes(1);
  //   });
});
