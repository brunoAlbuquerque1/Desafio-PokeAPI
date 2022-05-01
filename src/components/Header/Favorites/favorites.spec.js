import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Favorites from ".";

describe("<Favorites />", () => {
  it("should render text Favoritos", () => {
    render(<Favorites to="/" />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument();
  });

  it("click to redirect", () => {
    render(<Favorites to="/url" />, {
      wrapper: BrowserRouter,
    });
    const link = screen.getByTestId("link-favorites");

    userEvent.click(link);
    expect(global.window.location.pathname).toEqual("/favorites");
  });
});
