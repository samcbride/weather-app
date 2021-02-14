import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const location = {
  city: "Manchester",
  country: "UK",
};

const forecasts = [
  {
    date: 1111111,
    description: "Stub description 1",
    icon: "800",
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 80,
    wind: {
      speed: 60,
      direction: "sw",
    },
  },
];

const forecast = {
  date: 1111111,
  temperature: {
    max: 22,
    min: 12,
  },
  humidity: 80,
  wind: {
    speed: 60,
    direction: "sw",
  },
};

test("renders the app", () => {
  render(<App location={location} forecasts={forecasts} forecast={forecast} />);
  const linkElement = screen.getByText(/Manchester, UK/i);
  expect(linkElement).toBeInTheDocument();
});
