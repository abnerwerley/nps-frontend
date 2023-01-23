import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: sans-serif;
`;

export const ModalContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 336px;
  height: 464px;
  margin: 1em;
`;

export const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Content = styled.div``;

export const DataList = styled.datalist``;

export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 25px;
  height: 25px;
`;

export const Range = styled.input`
  width: 100%;
`;

export const TextArea = styled.input`
  width: 100%;
  height: 100px;
`;
