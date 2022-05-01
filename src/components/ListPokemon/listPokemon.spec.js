import React from "react";
import MockAdapter from "axios-mock-adapter";
import { render, act, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("deve renderizar a próxima página e a página anterior", async () => {
    render(<ListPokemon />);
    expect(screen.getByText("1")).toBeInTheDocument();

    const nextButon = screen.getByTestId("nextButton_component");
    userEvent.click(nextButon);
    expect(screen.getByText("2")).toBeInTheDocument();

    const prevBtton = screen.getByTestId("prevButton_component");
    userEvent.click(prevBtton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
