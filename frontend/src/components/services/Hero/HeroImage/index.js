import React from "react";
import { UncontrolledAccordion, AccordionHeader, 
  AccordionBody, AccordionItem,Card , CardBody,CardTitle ,CardSubtitle ,CardText ,Button } from 'reactstrap'



import {
  HeroImageContainer,
  ServicesWrapper,  ServicesH1
} from "./HeroImageElements";


const HeroImage = () => {
  return (
    <HeroImageContainer>
      <ServicesH1>Our Services</ServicesH1>
     <UncontrolledAccordion
  defaultOpen={[
    '1',
  ]}
  stayOpen
>
  <AccordionItem>
    <AccordionHeader targetId="1">
      <h2>First Floor</h2>
    </AccordionHeader>
    <AccordionBody accordionId="1">
    <ServicesWrapper>
     <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
                
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
      </ServicesWrapper>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
     <h2>Second Floor</h2>
    </AccordionHeader>
    <AccordionBody accordionId="2">
    <ServicesWrapper>
     <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
                
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
             
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
      </ServicesWrapper>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      <h2>Third Floor</h2>
    </AccordionHeader>
    <AccordionBody accordionId="3">
    <ServicesWrapper>
     <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
      </ServicesWrapper>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="4">
      <h2>Fourth Floor</h2>
    </AccordionHeader>
    <AccordionBody accordionId="4">
    <ServicesWrapper>
     <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
      </ServicesWrapper>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="5">
      <h2>Fifth Floor</h2>
    </AccordionHeader>
    <AccordionBody accordionId="5">
    <ServicesWrapper>
     <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
              
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
        <Card style={{ width: '18rem'}}
            >
              <img
                alt="Card image"
                src="http://www.sunriseseniorliving.com/~/media/blog-images/september-2017/yoga%20and%20older%20adults.jpg"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Yoga
                </CardTitle>
               
                <CardText>
                  Some quick example text to build on the Yoga and make up the bulk of the card's content.
                </CardText>
                
              </CardBody>
        </Card>
      </ServicesWrapper>
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>
<style>
        {`
        
      .accordion-button:not(.collapsed) {
        color: #ffffff;
        background-color: #EF3A47;
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
      }
      h2, .h2 {
        font-size: 2rem;
      }
      h5, .h5 {
        color: #EF3A47;
      }
        
        `}
      </style>
    </HeroImageContainer>
  );
};

export default HeroImage;
