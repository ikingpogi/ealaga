import React from "react";

import {
  LinkR,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from "./ServicesElements";
import image1 from "../../../images/donation.png";
import image2 from "../../../images/appointments.png";
import image3 from "../../../images/massage.png";
import image4 from "../../../images/clock.png";
import { getName } from '../../login/helpers';


const Services = () => {


  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Hi, {getName()} 😊 How may I help you?</ServicesH1>
        <ServicesWrapper>
        <LinkR to="/client/appointment"> 
          <ServicesCard>
            <ServicesIcon src={image2} />
            <ServicesH2>Book a schedule</ServicesH2>
            <ServicesP>
            You can book a schedule services such as recreational activities, dialysis, and multipurpose hall here.
            </ServicesP>
          </ServicesCard>
          </LinkR>
          <LinkR to="/client/activities">  
            <ServicesCard>
            <ServicesIcon src={image3} />
            <ServicesH2>Activity</ServicesH2>
            <ServicesP>
            You can monitor or check your present and future activities here.
            </ServicesP>
          </ServicesCard>
          </LinkR>
          <LinkR to="/client/history">  
          <ServicesCard>
            <ServicesIcon src={image4} />
            <ServicesH2>History</ServicesH2>
            <ServicesP>
            You can check your past activities here.
            </ServicesP>
          </ServicesCard>
          </LinkR>
            <ServicesCard>
              <ServicesIcon src={image1} />
              <ServicesH2>Donation</ServicesH2>
              <ServicesP>
              You can donate to center for the elderly here.
              </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
