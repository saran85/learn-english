import React, { useState } from "react";
import {
  Button,
  ButtonDesign,
  DynamicPage,
  DynamicPageTitle,
  DynamicPageHeader,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Title,
  PageBackgroundDesign,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { MainPage } from "../../practiceApp/MainPage";
import { EASY_ENGLISH_ROUTES } from "../router/routes";
import { Footer } from "../Footer/Footer";

export const MainLayout = () => {
  const navigate = useNavigate();
  const [learSentence, setLearSentence] = useState(false);
  const [testSentence, setTestSentence] = useState(false);
  const onClickLearn = () => {
    setLearSentence(true);
    setTestSentence(false);
  };
  const learn_Sentence = "Learn Sentence";
  const btnId = "learn_Sentence";
  const onButtonLearnClick = (event) => {
    const buttonClick = event.target.getAttribute("data-id");
    const routeMap = {
      [`${btnId}1_50`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_1to50,
      [`${btnId}51_100`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_51to100,
      [`${btnId}101_150`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_101to150,
      [`${btnId}151_200`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_151to200,
      [`${btnId}201_250`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_201to250,
      [`${btnId}251_300`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_251to300,
      [`${btnId}301_350`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_301to350,
      [`${btnId}351_400`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_351to400,
      [`${btnId}401_450`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_401to450,
      [`${btnId}451_500`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_451to500,
      [`${btnId}501_550`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_501to550,
      [`${btnId}551_600`]: EASY_ENGLISH_ROUTES.LEARN_SENTENCE_551to600,
    };

    if (routeMap.hasOwnProperty(buttonClick)) {
      navigate(routeMap[buttonClick]);
    }
  };

  const onClickTest = () => {
    setTestSentence(true);
    setLearSentence(false);
  };
  const test_Sentence = "Test Sentence";
  const btnTestId = "test_Sentence";
  const onButtonTextClick = (event) => {
    const buttonClick = event.target.getAttribute("data-id");
    const routeMap = {
      [`${btnTestId}1_50`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_1to50,
      [`${btnTestId}51_100`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_51to100,
      [`${btnTestId}101_150`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_101to150,
      [`${btnTestId}151_200`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_151to200,
      [`${btnTestId}201_250`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_201to250,
      [`${btnTestId}251_300`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_251to300,
      [`${btnTestId}301_350`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_301to350,
      [`${btnTestId}351_400`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_351to400,
      [`${btnTestId}401_450`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_401to450,
      [`${btnTestId}451_500`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_451to500,
      [`${btnTestId}501_550`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_501to550,
      [`${btnTestId}551_600`]: EASY_ENGLISH_ROUTES.TEST_PRACTICE_551to600,
    };

    if (routeMap.hasOwnProperty(buttonClick)) {
      navigate(routeMap[buttonClick]);
    }
  };

  return (
    <>
    <DynamicPage
      backgroundDesign={PageBackgroundDesign.Solid}
      headerCollapsed={false}
      headerContentPinnable={false}
      headerTitle={
        <DynamicPageTitle
          header={
            <Title style={{ marginTop: "4rem", paddingTop: "1rem" }}>
              Basic Spoken English in Tamil
            </Title>
          }
        />
      }
      headerContent={
        <DynamicPageHeader>
          <FlexBox
            
            direction={FlexBoxDirection.Row}
            justifyContent={FlexBoxJustifyContent.Center}
          >
            <Button
              design={ButtonDesign.Emphasized}
              onClick={onClickLearn}
              data-id="learn_exercises"
              style={{ width: "15em", fontSize: "1.3rem" }}
            >
              Learn Exercises
            </Button>
            <Button
              design={ButtonDesign.Negative}
              onClick={onClickTest}
              data-id="test_Exercises"
              style={{ width: "15em", fontSize: "1.3rem" }}
            >
              Test Practice Exercises
            </Button>
          </FlexBox>
        </DynamicPageHeader>
      }
    >
      {learSentence && (
        <MainPage
          btnName={learn_Sentence}
          btnId={btnId}
          onButtonClick={onButtonLearnClick}
          backgroundColor="#B7C9F2"
          chooseTitle="Choose any one to learn."
        />
      )}

      {testSentence && (
        <MainPage
          btnName={test_Sentence}
          btnId={btnTestId}
          onButtonClick={onButtonTextClick}
          backgroundColor="#FFB5DA"
          chooseTitle="Pick any of them to practice for the test."
        />
      )}
      
    </DynamicPage>
    <Footer/>
    </>
  );
};
