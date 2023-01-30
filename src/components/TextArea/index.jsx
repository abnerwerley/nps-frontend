import React from "react";
import { TextAreaStyle } from "./style";

export function TextArea({ name, onChange }) {
  return (
    <>
      <TextAreaStyle
        name={name}
        onChange={onChange}
        className="textArea"
        type="text"
        placeholder="Deixe sua opinião e melhorias (opcional)"
      ></TextAreaStyle>
    </>
  );
}

export default TextArea;
