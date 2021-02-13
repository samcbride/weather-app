import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const location = {
  city: "Manchester",
  country: "UK",
};

const forecasts = [];

test("renders the app", () => {
  render(<App location={location} forecasts={forecasts} />);
  const linkElement = screen.getByText(/Manchester, UK/i);
  expect(linkElement).toBeInTheDocument();
});
