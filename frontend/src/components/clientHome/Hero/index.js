import React from "react";
import { UncontrolledAccordion, AccordionHeader, 
  AccordionBody, AccordionItem,Card , CardBody,CardTitle ,CardSubtitle ,CardText ,Button } from 'reactstrap'

import CarouselSlider from "react-carousel-slider";


import {
  HeroImageContainer,
  ServicesWrapper,  ServicesH1
} from "./HeroImageElements";

import Container from "react-bootstrap/Container";

const HeroImage = () => {

     let data = [
      {
        imgSrc:
          "https://www.bannerhealth.com/-/media/images/project/bh/services/healthy-aging/healthy-aging-mid-page-image.ashx?h=461&w=1920&hash=9B0AF175CDF0895200DDABB5DEB91B7E",
      },
      {
        imgSrc:
          "https://thumbs.dreamstime.com/b/young-women-taking-care-elderly-people-living-room-banner-design-woman-taking-care-elderly-people-living-room-banner-188940253.jpg?q=50",
      },
      {
        imgSrc:
          "http://www.homephoeniix.com.br/wp-content/uploads/2017/06/banner_02.jpg?q=50",
      },
      
    ];
  


  let manner = {
    autoSliding: { interval: "3s" },
    circular: true,
  };


  let dotsSetting = {
    style: {
      dotSize: "20px",
      currDotColor: "#EF3A47",
      marginTop: "0px"
    }
  };

  let buttonSetting = {
    placeOn: "middle-inside",
    style: {
      left: {
        height: "100px",
        width: "60px",
        color: "white",
        margin: "0",
        fontSize: "30px",
        background: "#EF3A47",
        opacity: "1",
      },
      right: {
        height: "100px",
        width: "60px",
        color: "white",
        margin: "0",
        fontSize: "30px",
        background: "#EF3A47",
        opacity: "1",
      },
    },
  };
  


  return (
    <>
      
    <ServicesWrapper>
    <div className="offers_container">
        <div className="offer_slider">
          <CarouselSlider
            slideItems={data}
            manner={manner}
            dotsSetting={dotsSetting}
            buttonSetting={buttonSetting}
            sliderBoxStyle={{
              width: "98.6%",
              height: "390px",
              background: "transparent",
              margin: "0 0 0 10px",
            }}
            itemsStyle={{ padding: "0px", margin: "40px 0px 0px 0px" }}
          />
          
        </div>
        </div>
      </ServicesWrapper>
  
<style>
        {`
        
        .container {
    
          max-width: 100%;
      }
      
      
        
        `}
      </style>
      </>
  );
};

export default HeroImage;
