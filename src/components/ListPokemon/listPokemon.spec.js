import React from "react";
import MockAdapter from "axios-mock-adapter";
import { render, act, waitFor, screen } from "@testing-library/react";

import api from "../../service/api";
import ListPokemon from "./listPokemon";

const apiMock = new MockAdapter(api);
const mockPokemon = {
  id: 1,
  name: "pokemon name",
  image: "image",
};
describe("List Pokemon component tests", () => {
  it("renders without crashing with request", async () => {
    render(<ListPokemon />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    act(() => {
      apiMock.onGet("/pokemon").reply(200, [{ ...mockPokemon }]);
    });

    await waitFor(() => {
      expect(screen.getByTestId("resolved")).toBeInTheDocument();
    });
  });
});
