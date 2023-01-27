/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../src/components/Button";
import "@testing-library/jest-dom/extend-expect";

test("Button sould be rendered and enabled", () => {
  render(<Button>Responder Nps</Button>);
  const button = screen.getByRole("button");
  expect(button).not.toBeDisabled();
});
