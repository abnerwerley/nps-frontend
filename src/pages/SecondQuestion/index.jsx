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
import axios from "axios";

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
  const [questionId, setQuestionId] = useState("");
  const [response, setResponse] = useState("");
  const [score, setScore] = useState(5);

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/question/2").then((response) => {
      setQuestionId(response.data.questionId);
      setQuestion(response.data);
    });
  }, []);

  const post = (event) => {
    const data = {
      questionId: questionId,
      response: response,
      score: score,
    };
    axios.post("http://localhost:8080/answer", data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error.message);
    });
  };

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
              <S.Range name="score" type="range" onChange={handleScoreChange} />
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
              <TextArea
                name={"response"}
                onChange={handleResponseChange}
              ></TextArea>
            </S.DivFields>
            <S.BottomButtons>
              <Button className={"backButton"}>
                <S.LinkStyled to={"/firstQuestion"} style={{ color: "black" }}>
                  Voltar
                </S.LinkStyled>
              </Button>
              <Button className={"nextButton"} onClick={post}>
                <S.LinkStyled to={"/thirdQuestion"} style={{ color: "white" }}>
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

export default SecondQuestion;
