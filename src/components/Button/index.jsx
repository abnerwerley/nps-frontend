import React from "react";
import { ButtonStyle } from "./style";

export function Button({ children, onClick, className, onSubmit, disabled }) {
  return (
    <ButtonStyle onClick={onClick} className={className} onSubmit={onSubmit} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
