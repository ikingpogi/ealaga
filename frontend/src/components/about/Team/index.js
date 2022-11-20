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
import { MDBGallery, MDBGalleryList} from 'mdbreact';
import Gallery from "react-photo-gallery";

const Services = () => {

  const dataImg = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
      width: 4927,
      height: 1000
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];

  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Meet the Team</ServicesH1>
        <ServicesH2>Center For Elderly’s Team</ServicesH2>
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

        <ServicesH2>eAlaga’s Development Team</ServicesH2>
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
     
        <ServicesH1>Our Work</ServicesH1>
        
        {/* <Gallery photos={dataImg} /> */}

      </ServicesContainer>
    </>
  );
};

export default Services;
