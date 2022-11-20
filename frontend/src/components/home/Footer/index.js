import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterBlock,
  CopyrightWrapper
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <FooterBlock>
            <h1>Contact us</h1>
            <h2>iLoveTaguig@gmail.com</h2>
            <h2>+91 0000000000</h2>
            <h3>Available from 8am to 11pm.</h3>
          </FooterBlock>
        </FooterColumn>
        <FooterColumn>
          <FooterBlock>
            <h1>Head Office</h1>
            <h2>
              Office of Senior Citizen Affair
              <br />
              OSCA
            </h2>
          </FooterBlock>
          <FooterBlock>
            <h1>Locations</h1>
            <h2>R. Papa</h2>
            <h2>High School</h2>
          </FooterBlock>
        </FooterColumn>
        <FooterColumn>
          <FooterBlock>
            <h1>FAQs</h1>
            <h2>
              <Link to="/terms" rel="noopener noreferrer" target="_blank">
                Terms and Conditions
              </Link>
            </h2>
            <h2>
              <Link to="/privacy" rel="noopener noreferrer" target="_blank">
                Privacy Policy
              </Link>
            </h2>
          </FooterBlock>
        </FooterColumn>
        <FooterColumn>
          <FooterBlock>
            <h1>Follow us</h1>
            <h2>
              <a href="buy" rel="noopener noreferrer" target="_blank">
                Whatsapp
              </a>
            </h2>
            <h2>
              <a href="buy" rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </h2>
            <h2>
              <a href="sell" rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
            </h2>
          </FooterBlock>
        </FooterColumn>
      </FooterWrapper>
      <CopyrightWrapper>
        Copyright 2022. eAlaga. All rights reserved.
      </CopyrightWrapper>
    </FooterContainer>
  );
};

export default Footer;
