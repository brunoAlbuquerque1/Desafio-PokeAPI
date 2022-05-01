import { screen, render } from "@testing-library/react";
import Logo from "./logo";

describe("<Logo />", () => {
  it("should render logo", () => {
    render(<Logo />);
    expect(
      screen.getByRole("img", {
        name: /logo pokemon/i,
      })
    ).toBeInTheDocument();
  });

  it("should render text SubTitle", () => {
    render(<Logo />);
    expect(screen.getByText(/Teste Ambev, PokemonAPi/i)).toBeInTheDocument();
  });

  test("should render is image  logo", () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toHaveProperty(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    );
  });
});
