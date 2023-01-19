import Modal from "react-modal";
import { useState } from "react";
import close from "../../assets/close.svg";
import * as S from "./style";
import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function FirstQuestion() {
  const [modalIsOpen, setIsOpen] = useState(true);

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
            <S.Close src={close} onClick={handleCloseModal} />
          </S.TopButtons>
          <h1>Avaliação de satisfação</h1>

          <S.Content>
            <p>{question.enquiry}</p>
            <S.Range name="score" type="range" />
            <S.DataList>
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
            </S.DataList>
            <S.TextArea
              name="response"
              className="textArea"
              type="text"
              placeholder="Input só de leitura, aqui..."
            ></S.TextArea>
          </S.Content>
          <S.BottomButtons>
            <button>
              <Link to={"/secondQuestion"}>Próxima</Link>
            </button>
          </S.BottomButtons>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default FirstQuestion;
