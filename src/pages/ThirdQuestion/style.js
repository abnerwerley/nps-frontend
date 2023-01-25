import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  font-family: sans-serif;
`;

export const ModalContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 472.5px;
  height: 652.5px;

  @media (min-width: 300px) and (max-width: 699px) {
    width: 336px;
    height: 464px;
  }

  @media (max-width: 299px) {
    width: 336px;
    height: 464px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Close = styled.img`
  width: 25px;
  height: 25px;
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 300px) and (max-width: 699px) {
    display: none;
  }
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  font-family: "Poppins";
  font-style: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const H1 = styled.h1`
  margin: 0 auto;
  padding-top: 90px;

  width: 320.62px;
  height: 20.25px;

  font-weight: 600;
  font-size: 27px;
  line-height: 30px;

  color: #333333;
  @media (min-width: 300px) and (max-width: 699px) {
    padding-top: 65px;

    width: 228px;
    height: 14.4px;

    font-size: 18px;
    line-height: 26px;
  }
`;

export const Paragraph = styled.p`
  padding: 20px;
  margin: 0;

  width: 361.12px;
  height: 88.9px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #333333;

  @media (min-width: 299px) and (max-width: 699px) {
    padding: 22px;

    width: 237px;
    height: 57px;

    font-size: 12px;
    line-height: 22px;

    opacity: 0.78;
  }
`;

export const DivFields = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Range = styled.input`
  padding-top: 40px;
  width: 352px;
  height: 9px;

  background: #e5e5e5;
  border-radius: 13px;

  @media (min-width: 300px) and (max-width: 699px) {
    padding-top: 25px;

    width: 260px;
    height: 28px;
  }
`;

export const DataList = styled.datalist``;

export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 56.25px;

  .backButton {
    border: 1px solid #333333;

    @media (min-width: 699px) {
      display: none;
    }
  }

  .nextButton {
    background: linear-gradient(90deg, #fb6422 0%, #ff046d 100%);
    border: none;
  }

  @media (min-width: 300px) and (max-width: 699px) {
    width: 90%;
    justify-content: space-around;
    padding-top: 44px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
