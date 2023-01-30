/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import FirstQuestion from "../src/pages/FirstQuestion";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("When page is opened, modal should be opened", () => {
  render(<FirstQuestion />, { wrapper: BrowserRouter });
  const modal = screen.getByTestId("modal");
  expect(modal).toBeInTheDocument;
});

test("FirstPage should have 'Responder Nps' button", () => {
  render(<FirstQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Responder Nps");
  expect(button).toBeInTheDocument();
});

test("FirstPage should have 'Próxima' button", () => {
  render(<FirstQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Próxima");
  expect(button).toBeInTheDocument();
});

test("FirstPage should have H1", () => {
  render(<FirstQuestion />, { wrapper: BrowserRouter });
  const h1 = screen.getByText("Avaliação de satisfação");
  expect(h1).toBeInTheDocument();
});
