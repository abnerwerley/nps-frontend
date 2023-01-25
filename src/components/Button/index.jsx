import { ButtonStyle } from "./style";

export function Button({ children, onClick, className }) {
  return (
    <ButtonStyle onClick={onClick} className={className}>
      {children}
    </ButtonStyle>
  );
}
