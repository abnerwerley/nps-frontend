import Modal from "react-modal";
import { useState } from "react";
import close from "../../assets/close.svg";
import arrow from "../../assets/arrow.svg";
import * as S from "./style";
import { TextArea } from "../../components/TextArea/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import Axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ThirdQuestion() {
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
    Axios.get("http://localhost:8080/question/3").then((response) => {
      setQuestion(response.data);
    });
  }, []);

  return (
    <S.Container>
      <Button onClick={handleOpenModal}>Responder Nps</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <S.ModalContainer>
          <S.TopButtons>
            <Link to={"/secondQuestion"}>
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
              <TextArea></TextArea>
            </S.DivFields>
            <S.BottomButtons>
              <Button className={"backButton"}>
                <S.LinkStyled to={"/secondQuestion"} style={{ color: "black" }}>
                  Voltar
                </S.LinkStyled>
              </Button>
              <Button className={"nextButton"}>
                <S.LinkStyled to={"/finished"} style={{ color: "white" }}>
                  Próxima
                </S.LinkStyled>
              </Button>
            </S.BottomButtons>
          </S.Content>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}

export default ThirdQuestion;
