import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Digital Nomad Compass", () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital Nomad Compass/i);
  expect(linkElement).toBeInTheDocument();
});
