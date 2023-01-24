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
  justify-content: space-between;

  @media (min-width: 300px) and (max-width: 699px) {
    justify-content: flex-end;
  }

  @media (max-width: 299px) {
    justify-content: flex-end;
  }
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 300px) and (max-width: 699px) {
    display: none;
  }
`;

export const Close = styled.img`
  width: 25px;
  height: 25px;

  @media (min-width: 300px) and (max-width: 699px) {
  }
`;

export const Content = styled.div``;

export const DataList = styled.datalist``;

export const Range = styled.input`
  width: 100%;
`;

export const TextArea = styled.input`
  width: 100%;
  height: 100px;
`;

export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 699px) {
    justify-content: flex-end;
  }
`;

export const BackButton = styled.button`
  @media (min-width: 699px) {
    display: none;
  }
`;

export const NextButton = styled.button``;
