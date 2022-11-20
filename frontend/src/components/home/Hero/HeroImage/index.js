import React from "react";
import Play from "../../../../images/download.png";
import Img from "../../../../images/app.png";
import { AppStore } from "../HeroElements";
import Logo from "../../../../images/logos.png";
import LogoVector from "../../../../images/logovector.png";
import TupLogo from "../../../../images/tup.png";
import OscaLogo from "../../../../images/osca.png";
import TaguigLogo from "../../../../images/taguig.png";

import {
  HeroImageContainer,
  AppWrapper,
  App,
  TextWrapper,
  AppTitle,
  AppPara
} from "./HeroImageElements";

const HeroImage = () => {
  return (
    <HeroImageContainer>
      <AppWrapper>
        <App src={Img} alt="" />
      </AppWrapper>
      <TextWrapper>
        <AppTitle>
          <h2>A Web and Mobile App</h2>
          <h1>
          <img
              src={Logo}
              style={{ width: "35%", height: "auto", alignContent: "left" }}
              alt="/"
            /><br />
             <img
              src={LogoVector}
              style={{ width: "10%", height: "auto", alignContent: "left" }}
              alt="/"
            />&nbsp;          
            <img
              src={TupLogo}
              style={{ width: "10%", height: "auto", alignContent: "left" }}
              alt="/"
            />&nbsp;          
            <img
              src={OscaLogo}
              style={{ width: "10%", height: "auto", alignContent: "left" }}
              alt="/"
            />&nbsp;          
            <img
              src={TaguigLogo}
              style={{ width: "10%", height: "auto", alignContent: "left" }}
              alt="/"
            />
           
           
          </h1>
          {/* <h2>dwadwadwadwadw</h2> */}
        </AppTitle>
        <AppPara>
          <p>eAlaga is where clients of the company, Taguig City Center for the Elderly, will be able to book a health care service through using the web or mobile application. It is made to provide an easier way in availing health care services through online booking. Applicants who are interested in being a part of Taguig City Center for the Elderly can also apply through the eAlaga Website.</p>
        </AppPara>
        {/* <AppStore>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={Play}
              style={{ width: "50%", height: "auto", alignContent: "left" }}
              alt="/"
            />
          </a>
        </AppStore> */}
        <AppStore>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={Play}
              style={{ width: "70%", height: "auto", alignContent: "left", marginTop: "-100px", marginLeft:"-40px"
              ,['@media screen and (max-width: 768px)']: { 
                width: "100%", height: "auto", alignContent: "left", marginTop: "-100px", marginLeft:"-100px"
              }
            }}
              alt="/"
            />
          </a>
        </AppStore>
      </TextWrapper>
    </HeroImageContainer>
  );
};

export default HeroImage;
