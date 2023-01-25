import Modal from "react-modal";
import { useState } from "react";
import close from "../../assets/close.svg";
import arrow from "../../assets/arrow.svg";
import * as S from "./style";
import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SecondQuestion() {
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
    Axios.get("http://localhost:8080/question/2").then((response) => {
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
            <Link to={"/firstQuestion"}>
              <S.Arrow src={arrow} />
            </Link>
            <S.Close src={close} onClick={handleCloseModal} />
          </S.TopButtons>

          <S.Content>
            <S.Texts>
              <S.H1>Avaliação de satisfação</S.H1>
              <S.Paragraph>{question.enquiry}</S.Paragraph>
            </S.Texts>

            <S.DivFields>
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
                placeholder="Deixe sua opinião e melhorias (opcional)"
              ></S.TextArea>
            </S.DivFields>
            <S.BottomButtons>
              <S.BackButton>
                <S.LinkStyled to={"/firstQuestion"} style={{ color: "black" }}>
                  Voltar
                </S.LinkStyled>
              </S.BackButton>
              <S.NextButton>
                <S.LinkStyled to={"/thirdQuestion"} style={{ color: "white" }}>
                  Próxima
                </S.LinkStyled>
              </S.NextButton>
            </S.BottomButtons>
          </S.Content>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default SecondQuestion;
