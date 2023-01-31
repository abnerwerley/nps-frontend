import styled from "styled-components";

export const ButtonStyle = styled.button`
  border-radius: 2px;

  width: 157.5px;
  height: 54px;

  &[disabled]{
    opacity: 0.3;
  }

  @media (min-width: 300px) and (max-width: 699px) {
    width: 112px;
    height: 38.4px;
  }
`;
