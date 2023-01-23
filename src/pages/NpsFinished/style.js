import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: sans-serif;
`;

export const ModalContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 472.5px;
  height: 652.5px;
  margin: 1em;

  @media (min-width: 300px) and (max-width: 699px) {
    width: 336px;
    height: 464px;
  }

  @media (max-width: 299px) {
    width: 336px;
    height: 464px;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 25px;
  height: 25px;
`;

export const BottomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
