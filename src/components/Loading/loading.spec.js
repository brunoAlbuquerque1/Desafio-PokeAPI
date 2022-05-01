import { screen, render } from "@testing-library/react";
import Loading from "./loading";

describe("<Loading />", () => {
  it("should render text Favoritos", () => {
    render(<Loading />);
    expect(screen.getByText(/carregando..../i)).toBeInTheDocument();
  });
});
