/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SecondQuestion from "../src/pages/SecondQuestion";

test("When page is opened, modal should be opened", () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const modal = screen.getByTestId("secondModal");
  expect(modal).toBeInTheDocument;
});

test("SecondQuestion should open modal when 'Responder Nps' button is clicked", async () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const user = userEvent.setup();
  const button = screen.getByText("Responder Nps");
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(screen.getByTestId("secondModal")).toBeInTheDocument();
});

test("last page should have H1", () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const h1 = screen.getByText("Avaliação de satisfação");
  expect(h1).toBeInTheDocument();
});

test("last pageshould have 'Próxima' button", () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Próxima");
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

test("last pageshould have 'Voltar' button", () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const button = screen.getByText("Voltar");
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

// test("handleCloseModal", () => {
//   let modalIsOpen = true;
//   const handleCloseModal = () => {
//     modalIsOpen = false;
//   };
//   const wrapper = render(
//     <Modal modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />
//   );
//   const instance = wrapper.instance();
//   instance.props.handleCloseModal();
//   expect(modalIsOpen).toBe(false);
// });

// test("should have input range", () => {
//   render(<SecondQuestion />, { wrapper: BrowserRouter });
//   const inputRange = screen.getByTestId("rangeSecond");
//   expect(inputRange).toBeInTheDocument();
// });

test("should have divFields", () => {
  render(<SecondQuestion />, { wrapper: BrowserRouter });
  const divFields = screen.queryByTestId("divFieldsSecond");
  expect(divFields).not.toBeVisible;
});
