import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";

describe("<DefaultLayout />", () => {
  it("render correctly component", () => {
    render(
      <DefaultLayout>
        <p>Pages</p>
      </DefaultLayout>,
      { wrapper: BrowserRouter }
    );
  });
});
