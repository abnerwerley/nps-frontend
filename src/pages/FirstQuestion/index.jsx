import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Arrow from "../../assets/arrow.jsx";
import Close from "../../assets/close.jsx";
import * as S from "./style";
import { TextArea } from "../../components/TextArea/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import Axios from "axios";
import { useEffect } from "react";
import axios from "axios";
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
  const [questionId, setQuestionId] = useState("");
  const [response, setResponse] = useState();
  const [score, setScore] = useState(5);

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
            <Link to={"/"} className="arrowLink">
              <Arrow />
            </Link>
            <Close onClick={handleCloseModal} />
          </S.TopButtons>

          <S.Content>
            <S.Texts>
              <S.H1 testId="h1">Avaliação de satisfação</S.H1>
              <S.Paragraph testId="paragraph">{question.enquiry}</S.Paragraph>
            </S.Texts>

            <S.DivFields>
              <S.Range
                min="0"
                max="10"
                name="score"
                type="range"
                onChange={handleScoreChange}
                testId="range"
                list="datalist"
              />
              <S.DataList id="datalist">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </S.DataList>

              <TextArea
                name={"response"}
                onChange={handleResponseChange}
              ></TextArea>
              {(response === undefined || response === "") && (
                <S.P className="obrigatorio">*Obrigatório</S.P>
              )}
            </S.DivFields>
            <S.BottomButtons>
              <Button
                className={"nextButton"}
                onClick={
                  response !== undefined && response !== "" ? post : undefined
                }
                disabled={
                  response !== undefined && response !== "" ? false : true
                }
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
