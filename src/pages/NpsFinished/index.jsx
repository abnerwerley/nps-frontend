import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Close from "../../assets/close.jsx";
import * as S from "./style";
import { Button } from "../../components/Button/index.jsx";
import Check from "../../assets/check.jsx";

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
            <Close onClick={handleCloseModal} />
          </S.TopButtons>
          <S.ImageDiv>
            {/* <Check /> */}
          </S.ImageDiv>
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
