import React from "react";

import {
  LinkR,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper, BtnWrap
} from "./ServicesElements";
import image1 from "../../../images/profile.jpg";
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";


const Services = () => {

  let navigate = useNavigate();

  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Meet the Team</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>Ms. Jordan</ServicesH2>
            <ServicesP>
            President
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>Ms. Jordan</ServicesH2>
            <ServicesP>
            President
            </ServicesP>
          </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={image1} />
            <ServicesH2>Ms. Jordan</ServicesH2>
            <ServicesP>
            President
            </ServicesP>
          </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={image1} />
              <ServicesH2>Ms. Jordan</ServicesH2>
              <ServicesP>
              President
              </ServicesP>
            </ServicesCard>   
        </ServicesWrapper>
        <BtnWrap>
        <Button outline color="danger" onClick={()  => navigate('/about')}>Learn more</Button>
        </BtnWrap>
      </ServicesContainer>
    </>
  );
};

export default Services;
