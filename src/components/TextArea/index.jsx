import { TextAreaStyle } from "./style";

export function TextArea() {
  return (
    <>
      <TextAreaStyle
        name="response"
        className="textArea"
        type="text"
        placeholder="Deixe sua opinião e melhorias (opcional)"
      ></TextAreaStyle>
    </>
  );
}

export default TextArea;
