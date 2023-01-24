import Modal from "react-modal";
import { useState } from "react";
import close from "../../assets/close.svg";
import * as S from "./style";
import check from "./assets/check.svg";

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
      >
        <S.ModalContainer>
          <S.TopButtons>
            <S.Close src={close} onClick={handleCloseModal} />
          </S.TopButtons>
          <S.ImageDiv><S.CheckImage src={check} /></S.ImageDiv>
          
          <S.Content>
            <S.H1>Sua avaliação foi enviada com sucesso!</S.H1>
            <S.Paragraph>
              Esta avaliação ajuda a<br></br>
              melhorarmos a sua experiência.<br></br>
              Muito obrigado pela sua participação.
            </S.Paragraph>
          </S.Content>
          <S.BottomButton>
            <S.ConcludeButton onClick={handleCloseModal}>
              Concluir
            </S.ConcludeButton>
          </S.BottomButton>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default NpsFinished;
