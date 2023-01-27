/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import TextArea from "../src/components/TextArea";

test("TextArea sould be rendered", () => {
  const { getByPlaceholderText } = render(<TextArea />);
  expect(
    getByPlaceholderText("Deixe sua opinião e melhorias (opcional)")
  ).toBeTruthy();
});
