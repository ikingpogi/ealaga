import React from "react";
import Play from "../../../../images/google-play-soon.png";
import Img from "../../../../images/center.png";
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
        <App src={Img} 
        style={{ width: "100%", height: "auto", alignContent: "left" }}
        alt="" />
      </AppWrapper>
      <TextWrapper>
        <AppTitle>
          <h1>Taguig City Center for the Elderly</h1>
          {/* <h2>dwadwadwadwadw</h2> */}
        </AppTitle>
        <AppPara>
          <p>The five-storey wellness hub for Taguigeño senior citizens was opened last April, and features a therapy pool, a massage room, two saunas, a yoga room, a gym, and cinema for relaxation purposes. It also comes with a dialysis center to accommodate 15 patients at a time, and a multi-purpose hall for city programs and recreational activities.</p>
        </AppPara>
       
      </TextWrapper>
    </HeroImageContainer>
  );
};

export default HeroImage;
