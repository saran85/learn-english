import React, { useRef } from "react";
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
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/slim-arrow-right";
import "@ui5/webcomponents-icons/dist/process";
import "./LearnExercisesLayout.css";
import { useNavigate } from "react-router-dom";
import { EASY_ENGLISH_ROUTES } from "../../component/router/routes";
import { Footer } from "../../component/Footer/Footer";

export const LearnExercisesLayout = ({learnSentencesData}) => {
  const getLearnSentencesData = learnSentencesData;
  const [startIndex, setStartIndex] = React.useState(0);
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [progressBar, setProgressBar] = React.useState(10);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const onNextClick = () => {
    setStartIndex((preNext) => preNext + 5);
    setProgressBar((progValue) => progValue + 10);
    if (startIndex === 40) {
      setButtonDisable(true);
      dialogRef.current.show();
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
      <div className="main_Container">
        <Title
          level={TitleLevel.H3}
          style={{ margin: "1rem", paddingTop: "1rem" }}
        >
          Basic Spoken English in Tamil
        </Title>
        <Panel
          headerText="Learn Exercises 1 to 50"
          style={{ border: "#B7C9F2", marginLeft: "1rem", marginRight: "1rem" }}
        >
          <FlexBox
            direction={FlexBoxDirection.Column}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            wrap="Wrap"
            style={{ padding: "1rem", background: "white" }}
          >
            <Label>
              Communication skills can be improved through daily practice.
            </Label>
            <ProgressIndicator
              value={progressBar}
              valueState={ValueState.Success}
            />
            {getLearnSentencesData
              .slice(startIndex, startIndex + 5)
              .map((sentence, index) => (
                <FlexBox
                  key={index}
                  direction={FlexBoxDirection.Row}
                  alignItems={FlexBoxAlignItems.Center}
                  justifyContent={FlexBoxJustifyContent.SpaceAround}
                  wrap="Wrap"
                  style={{ width: "100%"}}
                >
                  <FlexBox className="question_flexBox">
                    <Text className="question_Text_Style" wrapping>
                      { sentence.tamil}
                    </Text>
                  </FlexBox>
                  <FlexBox wrap="Wrap">
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                  </FlexBox>
                  <FlexBox className="answer_flexBox" wrap="Wrap">
                    <Text className="answer_Text_Style" wrapping>
                      {sentence.english}
                    </Text>
                  </FlexBox>
                </FlexBox>
              ))}

            <Button onClick={onNextClick} disabled={buttonDisable}>
              Next
            </Button>
          </FlexBox>
        </Panel>
        <Footer/>
      </div>
    </>
  );
};
