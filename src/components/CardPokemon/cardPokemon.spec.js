import React from "react";
import { render, screen } from "@testing-library/react";
import CardPokemon from "./cardPokemon";

describe("CardPokemon component tests", () => {
  it("should render is name , img component", () => {
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
});
