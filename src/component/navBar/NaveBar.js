import React, { useRef } from "react";
import "./NaveBar.css";
import "@ui5/webcomponents-icons/dist/nav-back";
import "@ui5/webcomponents-icons/dist/menu2";
import "@ui5/webcomponents-icons/dist/education";
import "@ui5/webcomponents-icons/dist/request";
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Title,
  TitleLevel,
  Menu,
  MenuItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { EASY_ENGLISH_ROUTES } from "../router/routes";
import Logo from "../../Image/navlog.png"

export const NaveBar = ({ isNavBar }) => {
  const navigate = useNavigate();
  const onMenuClick = (event) => createMenuRef.current?.showAt(event.target);
  const createMenuRef = useRef(null);

  const onClick = () => {
    navigate(-1);
  };

  const onMenuItemClick = (event) => {
    if (event.detail.item.id === "learn-exercises") {
      navigate(EASY_ENGLISH_ROUTES.MAIN_ROUTES);
    } else if (event.detail.item.id === "practice-exercises") {
      navigate(EASY_ENGLISH_ROUTES.MAIN_ROUTES);
    }
  };

  return (
    <div className="Nav_Bar">
     
      <FlexBox
        direction={FlexBoxDirection.Row}
        justifyContent={FlexBoxJustifyContent.SpaceBetween}
        alignItems={FlexBoxAlignItems.Center}
        style={{ marginLeft: "1.4rem", marginRight: "1.4rem" }}
      > 
        <FlexBox style={{ visibility: isNavBar }}>
          <Button
            icon="sap-icon://nav-back"
            design={ButtonDesign.Transparent}
            onClick={onClick}
          />
        </FlexBox>
       
        <FlexBox direction={FlexBoxDirection.Row} alignItems={FlexBoxAlignItems.Center} style={{gap:10}}>
        <FlexBox>
      <img src={Logo} alt="log" style={{
     height: 50, width:50,borderRadius:50,
     resizeMode: 'stretch',}}/></FlexBox>
     <FlexBox>
          <Title level={TitleLevel.H3} className="Title_style">
            Easy ~ English
          </Title></FlexBox>
        </FlexBox>
        <FlexBox>
          <Button
            icon="sap-icon://menu2"
            design={ButtonDesign.Emphasized}
            onClick={onMenuClick}
          />
          <Menu
            onItemClick={onMenuItemClick}
            ref={createMenuRef}
            
          >
            <MenuItem
              id="learn-exercises"
              icon="sap-icon://education"
              text="Learn Exercises"
                          ></MenuItem>
            <MenuItem
              id="practice-exercises"
              icon="sap-icon://request"
              text="Practice Exercises"
            ></MenuItem>
          </Menu>
        </FlexBox>
      </FlexBox>
    </div>
  );
};
