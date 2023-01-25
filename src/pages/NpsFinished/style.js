import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: sans-serif;
`;

export const ModalContainer = styled.div`
  flex-direction: column;
  width: 472.5px;
  height: 493.87px;

  @media (min-width: 300px) and (max-width: 699px) {
    width: 336px;
    height: 370px;

    background: #ffffff;
  }

  @media (max-width: 299px) {
    width: 336px;
    height: 370px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Close = styled.img`
  width: 25px;
  height: 25px;
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CheckImage = styled.img`
  width: 75px;
  height: 75px;

  @media (min-width: 300px) and (max-width: 699px) {
    width: 55px;
    height: 55px;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const H1 = styled.h1`
  marigin: 0;
  padding: 39px;

  width: 320.62px;
  height: 54.33px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #333333;

  @media (min-width: 299px) and (max-width: 699px) {
    padding: 29px;
    margin: 0;

    width: 228px;
    height: 41px;

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

export const BottomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;

  .concludeButton {
    color: white;
    background: linear-gradient(90deg, #fb6422 0%, #ff046d 100%);
    border: none;
  }

  @media (min-width: 299px) {
    padding: 42px;
    border-radius: 2px;
  }
`;
