import styled, { css, keyframes } from "styled-components";
import { useState, useEffect } from "react";

const TopContainer = styled.div`
  width: 100%;
  height: 20vh;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const FirstContainer = styled.div`
  width: 95%;
  display: flex;
  height: 20%;
  border-bottom: 1px solid lightgray;
  align-items: center;
  margin-bottom: 10px;
`;

const FirstStrongText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FirstLightIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -330px -316px;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-left: 5px;
`;

const FirstLightText = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-left: auto;
`;

const FirstIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -198px -316px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 5px;
`;

const SecondContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const slideOut = keyframes`
 0% {
    transform: translateX(0);
    /* opacity: 0.2; */
 }
 100% {
    transform: translateX(-100%);
    /* opacity: 0; */
 }
`;

const slideIn = keyframes`
 0% {
    transform: translateX(100%);
 }
 100% {
    transform: translateX(0);
 }
`;

const SecondImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  animation: ${(props) =>
    props.shouldSlideOut
      ? css`
          ${slideOut} 1s forwards
        `
      : css`
          ${slideIn} 1s forwards
        `};
`;

const SecondTextsContainer = styled.div`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SecondTextContainer = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const SecondText = styled.p`
  font-size: 0.9rem;
  margin-left: 5px;
`;
const SecondRedArrow = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -367px;
  background-repeat: no-repeat;
  width: 9px;
  height: 6px;
  margin-left: auto;
`;
const SecondRightArrow = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -52px;
  background-repeat: no-repeat;
  width: 10px;
  height: 12px;
  margin-left: auto;
`;

function StockMarket() {
  const images = [
    "/images/stock1.png",
    "/images/stock2.png",
    "/images/stock3.png",
  ];
  const [imgIdx, setImgIdx] = useState(0);
  const [shouldSlideOut, setShouldSlideOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShouldSlideOut(true);
      setTimeout(() => {
        setImgIdx((prev) => (prev + 1) % images.length);
        setShouldSlideOut(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TopContainer>
      <FirstContainer>
        <FirstStrongText>증시</FirstStrongText>
        <FirstLightIcon />
        <FirstLightText>06.26. 12:24</FirstLightText>
        <FirstIcon />
      </FirstContainer>

      <SecondContainer>
        <div style={{ overflow: "hidden", width: "45%", height: "100%" }}>
          <SecondImg src={images[imgIdx]} shouldSlideOut={shouldSlideOut} />
        </div>
        <SecondTextsContainer>
          <SecondTextContainer>
            <SecondText>삼성전자</SecondText>
            <SecondRedArrow />
            <SecondText>72,300</SecondText>
          </SecondTextContainer>
          <SecondTextContainer>
            <SecondText>루닛</SecondText>
            <SecondRedArrow />
            <SecondText>177,600</SecondText>
          </SecondTextContainer>
          <SecondTextContainer>
            <SecondText>POSCO홀...</SecondText>
            <SecondRedArrow />
            <SecondText>402,000</SecondText>
          </SecondTextContainer>
          <SecondTextContainer>
            <SecondText>인기종목 더보기</SecondText>
            <SecondRightArrow />
          </SecondTextContainer>
        </SecondTextsContainer>
      </SecondContainer>
    </TopContainer>
  );
}

export default StockMarket;
