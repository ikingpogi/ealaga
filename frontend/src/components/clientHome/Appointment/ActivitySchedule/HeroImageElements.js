import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: none;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  alignitems: top;
  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 90px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 460px) {
    height: auto;
    padding-top: 90px;
  }
`;
export const LinkR = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;


export const ServicesWrappers2 = styled.div`
  max-width: 120vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 0px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr ;
    padding: 0 0px;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0px;
    width: 80%;
  }
`;

export const ServicesWrappers3 = styled.div`
        max-width: 75vh;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-gap: 50px;
        padding: 0 0px;

      @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr ;
        padding: 0 0px;
        width: 80%;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 0px;
        width: 80%;
      }
`;

export const ServicesWrappers4 = styled.div`
        max-width: 120vh;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        grid-gap: 50px;
        padding: 0 0px;

      @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr ;
        padding: 0 0px;
        width: 80%;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 0px;
        width: 80%;
      }
`;

export const ServicesCard3 = styled.div`
  background: linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%));
  display: flex;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  max-height: 250px;
  min-height: 250px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
  transition: all 0.3s ease-in-out ;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4 ease-in-out;
    box-shadow: 0 5px 10px rgba(255, 0, 0, 0.6);
    cursor: pointer;
    h2 {
      transition: all 0.4s ease-in-out ;
      color: #EF3A47;
    }

  }
  @media screen and (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    min-height: 300px;
    padding: 10px;
  }
`;

export const ServicesCard4 = styled.div`
  background: linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%));
  display: flex;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  max-height: 250px;
  min-height: 250px;
  max-width: 330px;
  min-width: 330px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
  transition: all 0.3s ease-in-out ;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4 ease-in-out;
    box-shadow: 0 5px 10px rgba(255, 0, 0, 0.6);
    cursor: pointer;
    h2 {
      transition: all 0.4s ease-in-out ;
      color: #EF3A47;
    }

  }
  @media screen and (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    min-height: 300px;
    padding: 10px;
  }
`;

export const ServicesCard2 = styled.div`
  background: linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%));
  display: flex;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  max-height: 330px;
  min-height: 330px;
  max-width: 330px;
  min-width: 330px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
  transition: all 0.3s ease-in-out ;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4 ease-in-out;
    box-shadow: 0 5px 10px rgba(255, 0, 0, 0.6);
    cursor: pointer;
    h2 {
      transition: all 0.4s ease-in-out ;
      color: #EF3A47;
    }

  }
  @media screen and (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    min-height: 300px;
    padding: 10px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1750px;
  margin: auto;
  align-items: center;
  grid-gap: 30px;
  padding: 900 90px;
  margin-bottom: 50px;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-top: 90px;
    max-width: 1750px;
    margin: auto;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 90px;
    max-width: 1750px;
    margin: auto;
    align-items: center;
  }
`;


export const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  color: #EF3A47;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;


export const ServicesWrappers = styled.div`
  max-width: 750px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 80px;
  padding: 0 0px;
  margin-left: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-top: 90px;
    max-width: 1750px;
    margin: auto;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 50px;
    max-width: 1750px;
    margin: auto;
    align-items: center;
  }
`;

export const BtnWrap = styled.div`
    margin-bottom: 50px;
    margin-top: 30px;

    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
`;

export const ServicesCard = styled.div`
  background: linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%));
  display: flex;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  max-height: 620px;
  min-height: 620px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(255, 0, 0, 0.6);
  transition: all 0.3s ease-in-out ;

  @media screen and (max-width: 768px) {
    height: 300px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    min-height: 300px;
    padding: 10px;
  }
`;

export const ServicesIcon = styled.img`
  height:110px;
  width: 120px;
  margin-bottom: 10px;
  border-radius: 10px;
`;


export const ServicesH2 = styled.h2`
  font-size: 2rem;
  color: #EF3A47;
  font-weight: bold;
`;

export const ServicesH3B = styled.h3`
  font-size: 1.3rem;
  color: #000000;
  font-weight: bold;

`;

export const ServicesH3 = styled.h3`
  font-size: 1.2rem;
  color: #000000;

`;

export const ServicesP = styled.p`
  color: #000000;
  font-size: 0.8rem;
  align-items: left;
  letter-spacing: 0.5px;
`;
