import React from "react";

import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Subtitle,
  Heading,
  TopLine, BtnWrap
} from "./InfoSectionElements";
import { Button } from 'reactstrap';
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt, buttonLabel
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>Core Values</Heading>
                <Subtitle darkText={darkText}>dwadwad</Subtitle>
              
              </TextWrapper>
            </Column1>
        
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
