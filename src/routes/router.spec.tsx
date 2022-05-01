import React from "react";
import AppRoutes from ".";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("should render home-page when in route(/)", () => {
  window.history.pushState({}, "", "/");

  render(
    <div>
      <AppRoutes />
    </div>
  );

  expect(screen.getByTestId("home-page")).toBeInTheDocument();
});
