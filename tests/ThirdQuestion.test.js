/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ThirdQuestion from "../src/pages/ThirdQuestion";

test("When page is opened, modal should be opened", () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const modal = screen.getByRole("dialog");
  expect(modal).toBeInTheDocument;
});

test("ThirdQuestion should open modal when 'Responder Nps' button is clicked", async () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const user = userEvent.setup();
  const button = screen.getByText("Responder Nps");
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(screen.getByTestId("ThirdModal")).toBeInTheDocument();
});

test("last page should have H1", () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const h1 = screen.getByText("Avaliação de satisfação");
  expect(h1).toBeInTheDocument();
});

test("last pageshould have 'Próxima' button", () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Próxima");
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

test("last pageshould have 'Voltar' button", () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Voltar");
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

test("should have divFields", () => {
  render(<ThirdQuestion />, { wrapper: BrowserRouter });
  const divFields = screen.queryByTestId("thirdDivFields");
  expect(divFields).not.toBeVisible;
});
