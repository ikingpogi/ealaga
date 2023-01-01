import styled, { keyframes } from "styled-components";

export const HeroImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 170px;
  margin-bottom: -120px;
  @media screen and (max-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    ${"" /* background: #C3E0E5; */}
    background: none;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); } 
`;

export const AppWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.8;
  animation: ${float} 3s ease-in-out infinite;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    height: 100%;
  }
`;

export const App = styled.img`
  max-width: auto;
  height: 120%;

  @media screen and (max-width: 1024px) {
    max-width: 60%;
    height: auto;
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    max-width: 50%;
    height: auto;
    margin-top: -10%;
  }

  @media only screen and (max-width: 480px) {
    max-width: 50%;
    height: auto;
    margin-top: -10%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AppTitle = styled.div`
  h1 {
    color: #414b52;
    font-size: 3rem;
    text-align: left;
    line-height: 60px;
    margin-left: 40px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 36px;
      text-align: center;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      font-size: 2.2rem;
      line-height: 48px;
    }
  }

  h2 {
    color: #414b52;
    font-size: 2rem;
    text-align: left;
    line-height: 50px;
    margin-left: 40px;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 36px;
      text-align: center;
      margin: 0;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.7rem;
      line-height: 36px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.7rem;
      line-height: 36px;
      text-align: center;
      margin: 0;
    }
  }
`;

export const AppPara = styled.p`
  color: #414b52;
  font-size: 1.3rem;
  margin-left: 40px;
  ${"" /* text-align: center; */}
  line-height: 54px;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 36px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 36px;
    text-align: center;
    margin: 5%;
  }
`;

export const AppStore = styled.div`
  width: 50%;
  vertical-align: left;
  @media screen and (max-width: 768px) {
    vertical-align: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    align-self: center;
  }
  @media only screen and (max-width: 480px) {
    width: 50%;
    vertical-align: left;
  }
`;
