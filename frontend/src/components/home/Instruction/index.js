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
import image1 from "../../../images/registers.png";
import image2 from "../../../images/appointments.png";
import image3 from "../../../images/massage.png";
import image4 from "../../../images/confirm.png";


const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>How to use eAlaga</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>Register</ServicesH2>
            <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei, consectetur adipiscing elit, sed do ei
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image3} />
            <ServicesH2>Choose Healthcare service</ServicesH2>
            <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei, consectetur adipiscing elit, sed do ei
            </ServicesP>
          </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={image2} />
            <ServicesH2>Set a schedule</ServicesH2>
            <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei, consectetur adipiscing elit, sed do ei
            </ServicesP>
          </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={image4} />
              <ServicesH2>Confirm Appointment</ServicesH2>
              <ServicesP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei, consectetur adipiscing elit, sed do ei
              </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
