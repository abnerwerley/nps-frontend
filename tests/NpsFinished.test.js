/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import NpsFinished from "../src/pages/NpsFinished";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("When page is opened, modal should be opened", () => {
  render(<NpsFinished />, { wrapper: BrowserRouter });
  const modal = screen.getByTestId("lastModal");
  expect(modal).toBeInTheDocument;
});

test("last pageshould have 'Concluir' button", () => {
  render(<NpsFinished />, { wrapper: BrowserRouter });
  const button = screen.getByText("Concluir");
  expect(button).toBeInTheDocument();
});

test("last page should have H1", () => {
  render(<NpsFinished />, { wrapper: BrowserRouter });
  const h1 = screen.getByText("Sua avaliação foi enviada com sucesso!");
  expect(h1).toBeInTheDocument();
});

test("should last page should have paragraph", () => {
  render(<NpsFinished />, { wrapper: BrowserRouter });
  const paragraph = screen.getByText(
    "Esta avaliação ajuda a melhorarmos a sua experiência. Muito obrigado pela sua participação."
  );
  expect(paragraph).toBeInTheDocument();
});
