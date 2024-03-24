import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Icon,
  Label,
  Text,
  Title,
  TitleLevel,
  ProgressIndicator,
  ValueState,
  Dialog,
  Bar,
  ButtonDesign,
  Panel,
  Input,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/slim-arrow-right";
import "@ui5/webcomponents-icons/dist/process";
import { useNavigate } from "react-router-dom";
import { EASY_ENGLISH_ROUTES } from "../../component/router/routes";
import { Footer } from "../../component/Footer/Footer";
import "./PracticeExercisesLayout.css"

export const PracticeExercisesLayout = ({
  practiceExercisesData,
  }) => {
  const getPracticeExercisesData = practiceExercisesData;
  const [startIndex, setStartIndex] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [progressBar, setProgressBar] = useState(10);
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const [userTranslations, setUserTranslations] = useState([]);
  const [valueState, setValueState] = useState(ValueState.None);
  const [correctCounts, setCorrectCounts] = useState(0);

  useEffect(() => {
    setUserTranslations(new Array(5).fill(""));
  }, [startIndex]);

  const onChange = (event, index) => {
    const { value } = event.target;
    const updatedTranslations = [...userTranslations];
    updatedTranslations[index] = value;
    setUserTranslations(updatedTranslations);

    setValueState(ValueState.None);
  };

  const getNumberOfCorrectTranslations = () => {
    let correctCount = 0;
    userTranslations.forEach((userTranslation, index) => {
      const correctTranslation =
        getPracticeExercisesData[startIndex + index].english;
      if (
        userTranslation &&
        userTranslation.toLowerCase() === correctTranslation.toLowerCase()
      ) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const onNextClick = () => {
    const hasEmptyInput = Object.values(userTranslations).some(
      (translation) => translation.trim() === ""
    );
    if (hasEmptyInput) {
      setValueState(ValueState.Error);
      return;
    }
    const currentCorrectCount = getNumberOfCorrectTranslations();
    setCorrectCounts(
      (prevCorrectCounts) => prevCorrectCounts + currentCorrectCount
    );
    const newStartIndex = startIndex + 5;
    setStartIndex(newStartIndex);
    setProgressBar((progValue) => progValue + 10);
    if (startIndex === 45) {
      setButtonDisable(true);
      dialogRef.current.show();
    } else {
      setUserTranslations(new Array(5).fill(""));
    }
  };

  const OnContinue = () => {
    navigate(EASY_ENGLISH_ROUTES.MAIN_ROUTES);
  };

  return (
    <>
      <Dialog
        ref={dialogRef}
        footer={
          <Bar
            endContent={
              <Button design={ButtonDesign.Emphasized} onClick={OnContinue}>
                Continue
              </Button>
            }
          />
        }
        style={{ border: "solid red" }}
      >
        <Title level={TitleLevel.H4}>Well Done </Title>
      </Dialog>
        <Title
          level={TitleLevel.H3}
          style={{marginLeft:"1rem",marginBottom:"1rem",marginTop:"5rem", paddingTop: "1rem" }}
        >
          Basic Spoken English in Tamil
        </Title>
        <Panel
          headerText={`Practice Exercises 1 to 50`}
          style={{ marginLeft: "1rem", marginRight: "1rem",marginBottom:"8rem"}}
        >
          <FlexBox justifyContent={FlexBoxJustifyContent.End}>
          <Label>{`You got ${correctCounts} translations correct!`}</Label>
          </FlexBox>
          
          <FlexBox
            direction={FlexBoxDirection.Column}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            style={{ padding: "1rem", background: "white" }}
          >
            <Label>
              Communication skills can be improved through daily practice.
            </Label>
            <ProgressIndicator
              value={progressBar}
              valueState={ValueState.Success}
            />
            {getPracticeExercisesData
              .slice(startIndex, startIndex + 5)
              .map((sentence, index) => (
                <FlexBox
                  key={index}
                  direction={FlexBoxDirection.Row}
                  alignItems={FlexBoxAlignItems.Center}
                  justifyContent={FlexBoxJustifyContent.SpaceAround}
                  style={{ width: "100%" }}
                >
                  <FlexBox className="question_flexBox">
                    <Text className="question_Text_Style" wrapping>
                      {sentence.tamil}
                    </Text>
                  </FlexBox>
                  <FlexBox>
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                  </FlexBox>
                  <FlexBox className="answer_flexBox">
                    <Input
                      id={index}
                      value={userTranslations[index]}
                      style={{ width: "30rem" }}
                      onChange={(event) => onChange(event, index)}
                      valueState={valueState}
                    />
                  </FlexBox>
                </FlexBox>
              ))}

            <Button onClick={onNextClick} disabled={buttonDisable}>
              Next
            </Button>
          </FlexBox>
        </Panel>
        <Footer/>
    </>
  );
};
