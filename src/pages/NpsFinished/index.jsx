import React from "react";
import Modal from "react-modal";
import { useState } from "react";
// import close from "../../assets/close.svg";
import * as S from "./style";
import { Button } from "../../components/Button/index.jsx";
// import check from "./assets/check.svg";

function NpsFinished() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <S.Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        testId="lastModal"
      >
        <S.ModalContainer>
          <S.TopButtons>
            {/* <S.Close src={close} onClick={handleCloseModal} /> */}
          </S.TopButtons>
          <S.ImageDiv>{/* <S.CheckImage src={check} /> */}</S.ImageDiv>
          <S.Content>
            <S.H1>Sua avaliação foi enviada com sucesso!</S.H1>
            <S.Paragraph>
              Esta avaliação ajuda a melhorarmos a sua experiência. Muito
              obrigado pela sua participação.
            </S.Paragraph>
          </S.Content>
          <S.BottomButton>
            <Button className={"concludeButton"} onClick={handleCloseModal}>
              Concluir
            </Button>
          </S.BottomButton>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default NpsFinished;
