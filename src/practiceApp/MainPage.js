import React from "react";
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Panel,
  Title,
  TitleLevel,
} from "@ui5/webcomponents-react";

export const MainPage = ({
  btnName,
  btnId,
  onButtonClick,
  backgroundColor,
  chooseTitle,
}) => {
  return (
    <div
      style={{
        margin: "2rem",
        height: "80vh",
        backgroundColor: backgroundColor,
        opacity: 0.8,
      }}
    >
      <Title
        level={TitleLevel.H4}
        style={{ margin: "2rem", paddingTop: "1rem" }}
      >
        {chooseTitle}
      </Title>
      <Panel
        headerText="Daily Practice"
        style={{ border: "#B7C9F2", marginLeft: "1rem", marginRight: "1rem" }}
      >
        <FlexBox
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}1_50`}
            onClick={onButtonClick}
          >
            {btnName} 1 to 50
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}51_100`}
            onClick={onButtonClick}
          >
            {btnName} 51 to 100
          </Button>
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}101_150`}
            onClick={onButtonClick}
          >
            {btnName} 101 to 150
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}151_200`}
            onClick={onButtonClick}
          >
            {btnName} 151 to 200
          </Button>
        </FlexBox>
        <FlexBox
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}201_250`}
            onClick={onButtonClick}
          >
            {btnName} 201 to 250
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}251_300`}
            onClick={onButtonClick}
          >
            {btnName} 251 to 300
          </Button>
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}301_350`}
            onClick={onButtonClick}
          >
            {btnName} 301 to 350
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}351_400`}
            onClick={onButtonClick}
          >
            {btnName} 351 to 400
          </Button>
        </FlexBox>
        <FlexBox
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}401_450`}
            onClick={onButtonClick}
          >
            {btnName} 401 to 450
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}451_500`}
            onClick={onButtonClick}
          >
            {btnName} 451 to 500
          </Button>
          <Button
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}501_550`}
            onClick={onButtonClick}
          >
            {btnName} 501 to 550
          </Button>
          <Button
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}551_600`}
            onClick={onButtonClick}
          >
            {btnName} 551 to 600
          </Button>
        </FlexBox>
      </Panel>
    </div>
  );
};
