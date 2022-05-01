import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./pagination";

describe("<Pagination />", () => {
  it("should render logo", () => {
    render(<Pagination />);
  });

  it("should render the  page when you click the button", () => {
    render(<Pagination />);
    const nexButton = screen.getByText("Proximo");
    userEvent.click(nexButton);
    const prevBtton = screen.getByText("Anterior");
    userEvent.click(prevBtton);
  });
});
