import React from "react";
import "./Footer.css";
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Text,
  Link,
  Title,
  TitleLevel,
} from "@ui5/webcomponents-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div class="footer">
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        direction={FlexBoxDirection.Column}
        style={{padding:10}}
      >
        <Title level={TitleLevel.H4} style={{color:"black"}}> Easy English</Title>
        <FlexBox justifyContent={FlexBoxJustifyContent.Center}
        direction={FlexBoxDirection.Row}>
          <Link href="https://www.instagram.com/your-instagram-account" target="_blank">
            <FontAwesomeIcon icon={faInstagram} style={{color:"whitesmoke"}}/>
          </Link>
          <Link href="https://www.facebook.com/your-facebook-account"target="_blank">
            <FontAwesomeIcon icon={faFacebook} style={{color:"whitesmoke"}}/>
          </Link>
          <Link href="https://twitter.com/your-twitter-account"target="_blank">
            <FontAwesomeIcon icon={faTwitter} style={{color:"whitesmoke"}} />
          </Link>
          <Link href="https://wa.me/your-whatsapp-number"target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} style={{color:"whitesmoke"}}/>
          </Link>
        </FlexBox>
        <Text>
          © 2024 EasyEnglish. All rights reserved. Privacy Policy. Design by
          EasyEnglish Developer
        </Text>
      </FlexBox>
    </div>
  );
};
