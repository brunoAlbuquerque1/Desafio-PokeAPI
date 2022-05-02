import React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import CardPokemon from "./cardPokemon";
import * as hookFavorite from "../../hooks/Favorites/FavoritesHook";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("CardPokemon component tests", () => {
  it("should render is name,img component", () => {
    render(
      <CardPokemon
        name={"pokemon name"}
        img={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        }
      />
    );

    expect(screen.getByText("pokemon name")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    );
  });

  test("renders without crashing", async () => {
    const mockPokemon = {
      id: 1,
      name: "pokemon name",
      image: "image",
    };

    const mockAddToFavorite = jest.fn();

    jest.spyOn(hookFavorite, "useFavorite").mockReturnValue({
      products: [{ ...mockPokemon }],
      addFavorite: mockAddToFavorite,
      Removefavorite: jest.fn(),
    });

    render(<CardPokemon pokemon={{ ...mockPokemon }} />, {
      wrapper: BrowserRouter,
    });

    const buyButton = screen.getByTestId("button_favorite");
    userEvent.click(buyButton);

    expect(mockAddToFavorite).toBeCalledTimes(1);
  });
});
