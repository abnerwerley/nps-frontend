import React from "react";
import Modal from "react-modal";
import { useState } from "react";
// import close from "../../assets/close.svg";
import * as S from "./style";
import { TextArea } from "../../components/TextArea/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import Axios from "axios";
import { useEffect } from "react";
import axios from "axios";

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
  const [questionId, setQuestionId] = useState("");
  const [response, setResponse] = useState("");
  const [score, setScore] = useState();

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/question/1").then((response) => {
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
    axios
      .post("http://localhost:8080/answer", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <S.Container key={questionId}>
      <Button onClick={handleOpenModal}>Responder Nps</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        testId="modal"
      >
        <S.ModalContainer>
          <S.TopButtons>
            {/* <S.Close src={close} onClick={handleCloseModal} /> */}
          </S.TopButtons>

          <S.Content>
            <S.Texts>
              <S.H1 testId="h1">Avaliação de satisfação</S.H1>
              <S.Paragraph testId="paragraph">{question.enquiry}</S.Paragraph>
            </S.Texts>

            <S.DivFields>
              <S.Range
                name="score"
                type="range"
                onChange={handleScoreChange}
                testId="range"
              />
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
              {score === undefined && <S.P className="obrigatorio">*Obrigatório</S.P>}
              <TextArea
                name={"response"}
                onChange={handleResponseChange}
              ></TextArea>
            </S.DivFields>
            <S.BottomButtons>
              <Button
                className={"nextButton"}
                onClick={score !== undefined ? post : undefined}
                disabled={score !== undefined ? false : true}
              >
                <S.LinkStyled to={"/secondQuestion"} style={{ color: "white" }}>
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

export default FirstQuestion;
