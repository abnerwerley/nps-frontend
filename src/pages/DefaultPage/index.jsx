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
import Check from "../../assets/check.jsx";

function DefaultPage() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [response, setResponse] = useState();
  const [score, setScore] = useState(5);
  const [step, setStep] = useState(1);

  function handleStepChange() {
    setStep(step + 1);
  }

  function handleStepBack() {
    setStep(step - 1);
  }

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

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  if (step === 1) {
    useEffect(() => {
      handleResponseChange;
      handleScoreChange;
      Axios.get("http://localhost:8080/question/1").then((response) => {
        setQuestionId(response.data.questionId);
        setQuestion(response.data);
      }, []);
    });
  } else if (step === 2) {
    useEffect(() => {
      handleResponseChange;
      handleScoreChange;
      Axios.get("http://localhost:8080/question/2").then((response) => {
        setQuestionId(response.data.questionId);
        setQuestion(response.data);
      });
    }, []);
  } else if (step === 3) {
    useEffect(() => {
      handleResponseChange;
      handleScoreChange;
      Axios.get("http://localhost:8080/question/3").then((response) => {
        setQuestionId(response.data.questionId);
        setQuestion(response.data);
      });
    }, []);
  }

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

  const notDisabled = response !== undefined && response !== "";

  return (
    <S.Container key={questionId}>
      {(step < 4 && (
        <div>
          <Button onClick={handleOpenModal}>Responder Nps</Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            testId="modal"
          >
            <S.ModalContainer>
              <div>
                {(step === 1 && (
                  <div className="arrowLink">
                    <S.TopButton>
                      <Close onClick={handleCloseModal} />
                    </S.TopButton>
                  </div>
                )) || (
                  <div>
                    <S.TopButtons>
                      <div className="arrowLink">
                        <Arrow onClick={handleStepBack} />
                      </div>
                      <Close onClick={handleCloseModal} />
                    </S.TopButtons>
                  </div>
                )}
                <S.Content>
                  <S.Texts>
                    <S.H1 testId="h1">Avaliação de satisfação</S.H1>
                    <S.Paragraph testId="paragraph">
                      {question.enquiry}
                    </S.Paragraph>
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
                    {((step === 1 && response === undefined) ||
                      response === "") && (
                      <S.P className="obrigatorio">*Obrigatório</S.P>
                    )}
                  </S.DivFields>
                  {(step === 1 && (
                    <S.BottomFirstButton>
                      <Button
                        className={"nextButton"}
                        onClick={
                          notDisabled
                            ? () => {
                                handleStepChange();
                                post();
                              }
                            : undefined
                        }
                        disabled={notDisabled ? false : true}
                      >
                        Próxima
                      </Button>
                    </S.BottomFirstButton>
                  )) || (
                    <S.BottomButtons>
                      <Button className={"backButton"} onClick={handleStepBack}>
                        Voltar
                      </Button>
                      <Button
                        className={"nextButton"}
                        onClick={
                          notDisabled
                            ? () => {
                                handleStepChange();
                                post();
                              }
                            : undefined
                        }
                      >
                        Próxima
                      </Button>
                    </S.BottomButtons>
                  )}
                </S.Content>
              </div>
            </S.ModalContainer>
          </Modal>
        </div>
      )) || (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
          testId="lastModal"
        >
          <S.ModalContainer>
            <S.TopButton>
              <Close onClick={handleCloseModal} />
            </S.TopButton>
            <S.ImageDiv>{<Check />}</S.ImageDiv>
            <S.Content>
              <S.FinalH1>Sua avaliação foi enviada com sucesso!</S.FinalH1>
              <S.Paragraph>
                Esta avaliação ajuda a melhorarmos a sua experiência. Muito
                obrigado pela sua participação.
              </S.Paragraph>
            </S.Content>
            <S.FinalButton>
              <Button className={"concludeButton"} onClick={handleCloseModal}>
                Concluir
              </Button>
            </S.FinalButton>
          </S.ModalContainer>
        </Modal>
      )}
    </S.Container>
  );
}

export default DefaultPage;
