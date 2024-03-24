import React from "react";
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Panel,
  Title,
  TitleLevel,
} from "@ui5/webcomponents-react";
import "./MainPage.css";

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
        height: "50em",
        backgroundColor: backgroundColor,
        opacity: 0.8,
        padding: "1rem",
      }}
    >
      <Title level={TitleLevel.H4} style={{ margin: "1rem",color:"Background" }}>
        {chooseTitle}
      </Title>
      <Panel className="flex-container" headerText="Daily Practice">
        <FlexBox
          wrap={FlexBoxWrap.Wrap}
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            tooltip={`${btnName} 1 to 50`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}1_50`}
            onClick={onButtonClick}
          >
            {btnName} 1 to 50
          </Button>
          <Button
            tooltip={`${btnName} 51 to 100`}
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}51_100`}
            onClick={onButtonClick}
          >
            {btnName} 51 to 100
          </Button>
          <Button
            tooltip={`${btnName} 101 to 150`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}101_150`}
            onClick={onButtonClick}
          >
            {btnName} 101 to 150
          </Button>
          <Button
            tooltip={`${btnName} 151 to 200`}
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}151_200`}
            onClick={onButtonClick}
          >
            {btnName} 151 to 200
          </Button>
        </FlexBox>
        <FlexBox
          wrap={FlexBoxWrap.Wrap}
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            tooltip={`${btnName} 201 to 250`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}201_250`}
            onClick={onButtonClick}
          >
            {btnName} 201 to 250
          </Button>
          <Button
            tooltip={`${btnName} 251 to 300`}
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}251_300`}
            onClick={onButtonClick}
          >
            {btnName} 251 to 300
          </Button>
          <Button
            tooltip={`${btnName} 301 to 350`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}301_350`}
            onClick={onButtonClick}
          >
            {btnName} 301 to 350
          </Button>
          <Button
            tooltip={`${btnName} 351 to 400`}
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}351_400`}
            onClick={onButtonClick}
          >
            {btnName} 351 to 400
          </Button>
        </FlexBox>
        <FlexBox
          wrap={FlexBoxWrap.Wrap}
          style={{ margin: "2rem" }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.SpaceAround}
        >
          <Button
            tooltip={`${btnName} 401 to 450`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}401_450`}
            onClick={onButtonClick}
          >
            {btnName} 401 to 450
          </Button>
          <Button
            tooltip={`${btnName} 451 to 500`}
            design={ButtonDesign.Negative}
            style={{ width: "15em" }}
            data-id={`${btnId}451_500`}
            onClick={onButtonClick}
          >
            {btnName} 451 to 500
          </Button>
          <Button
            tooltip={`${btnName} 501 to 550`}
            design={ButtonDesign.Emphasized}
            style={{ width: "15em" }}
            data-id={`${btnId}501_550`}
            onClick={onButtonClick}
          >
            {btnName} 501 to 550
          </Button>
          <Button
            tooltip={`${btnName} 551 to 600`}
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
