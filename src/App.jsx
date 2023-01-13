import Modal from "react-modal";
import { useState } from "react";
import arrow from "../src/assets/arrow.svg";
import close from "../src/assets/close.svg";
import * as S from "../src/style";
import Axios from "axios";
import { useEffect } from "react";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

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

  const [question, setQuestion] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:8080/question/1").then((response) => {
      setQuestion(response.data);
    });
  }, []);

  return (
    <S.Container>
      <button className="modal-button" onClick={handleOpenModal}>
        Responder Nps
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <S.ModalContainer>
          <S.TopButtons>
            <S.Arrow src={arrow} onClick={handleCloseModal} />
            <S.Close src={close} onClick={handleCloseModal} />
          </S.TopButtons>
          <h1>Avaliação de satisfação</h1>

          <div className="content">
            <p>{question.enquiry}</p>
            <S.Range type="range" list="tickmarks" />
            <datalist id="tickmarks">
              <option value="0" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" />
            </datalist>
            <S.TextArea
              className="textArea"
              type="text"
              placeholder="Input só de leitura, aqui..."
            ></S.TextArea>
          </div>
          <div className="BottomButton">
            <button>Próxima</button>
          </div>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default App;
