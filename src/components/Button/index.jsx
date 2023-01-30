import React from "react";
import { ButtonStyle } from "./style";

export function Button({ children, onClick, className, onSubmit }) {
  return (
    <ButtonStyle onClick={onClick} className={className} onSubmit={onSubmit}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
