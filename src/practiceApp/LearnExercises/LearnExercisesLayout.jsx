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
  FlexBoxWrap,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/slim-arrow-right";
import "@ui5/webcomponents-icons/dist/process";
import "./LearnExercisesLayout.css";
import { useNavigate } from "react-router-dom";
import { EASY_ENGLISH_ROUTES } from "../../component/router/routes";
import { Footer } from "../../component/Footer/Footer";

export const LearnExercisesLayout = ({ learnSentencesData }) => {
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
      <FlexBox
        direction={FlexBoxDirection.Column}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Text
          style={{
            marginBottom: "1rem",
            marginTop: "5rem",
            paddingTop: "1rem",
            fontWeight: "bolder",
            fontSize: 26,
          }}
        >
          Basic Spoken English in Tamil
        </Text>
      </FlexBox>
      <Panel headerText="Learn Exercises 1 to 50">
        <FlexBox
          direction={FlexBoxDirection.Column}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          wrap={FlexBoxWrap.Wrap}
          style={{
            padding: "4rem",
            maxWidth: "fit-content",
            minWidth: "fit-content",
            marginBottom: "8rem",
            marginLeft: "5rem",
          }}
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
                wrap={FlexBoxWrap.Wrap}
                style={{ width: "100%", marginTop: "2rem" }}
              >
                <FlexBox
                  wrap={FlexBoxWrap.Wrap}
                  style={{
                    marginLeft: "2rem",
                    maxWidth: "fit-content",
                    minWidth: "fit-content",
                  }}
                >
                  <FlexBox className="question_flexBox">
                    <Text className="question_Text_Style" wrapping>
                      {sentence.tamil}
                    </Text>
                  </FlexBox>
                  <FlexBox
                    wrap={FlexBoxWrap.Wrap}
                    alignItems={FlexBoxAlignItems.Center}
                    justifyContent={FlexBoxJustifyContent.SpaceAround}
                  >
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                    <Icon
                      name="sap-icon://process"
                      className="question_icon_Style"
                    />
                  </FlexBox>
                  <FlexBox className="answer_flexBox" wrap={FlexBoxWrap.Wrap}>
                    <Text className="answer_Text_Style" wrapping>
                      {sentence.english}
                    </Text>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            ))}

          <Button onClick={onNextClick} disabled={buttonDisable}>
            Next
          </Button>
        </FlexBox>
      </Panel>

      <Footer />
    </>
  );
};
