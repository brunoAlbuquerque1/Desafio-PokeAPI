import { screen, render, fireEvent } from "@testing-library/react";
import SearchBar from "./searchBar";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    render(<SearchBar setSearch={setSearch} />);

    const searchInput = screen.queryByPlaceholderText(
      "Digite aqui seu Pokemon"
    );

    // fireEvent.change(searchInput, { target: { value: "test" } });

    // expect(searchInput.value).toBe("test");
  });
});
