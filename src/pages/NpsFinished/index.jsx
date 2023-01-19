import Modal from "react-modal";
import { useState } from "react";
import close from "../../assets/close.svg";
import * as S from "./style";

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
          <h1>Sua avaliação foi enviada com sucesso!</h1>
          <p>
            Esta avaliação ajuda a melhorarmos a sua experiência. Muito obrigado
            pela sua participação.
          </p>
          <S.BottomButton>
            <button onClick={handleCloseModal}>Concluir</button>
          </S.BottomButton>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default NpsFinished;
