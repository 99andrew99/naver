import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";

const TopContainer = styled.div`
  width: 100%;
  height: 46vh;
  border: 1px solid #e3e5e8;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 뉴스스탠드, 언론사편집, 엔터, 스포츠, 경제
const FirstContainer = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
`;

const FirstStrongText = styled.p`
  /* font-size: 1.1rem; */
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FirstLightText = styled.p`
  color: gray;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const FirstLightIcon = styled.p`
  color: lightgray;
  margin-left: 10px;
  margin-right: 10px;
`;

//전체 언론사~
const SecondContainer = styled.div`
  width: 95%;
  height: 13%;
  background-color: #f5f7f8;
  margin-top: 15px;
  border-radius: 3%;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
`;

const SecodeNormalText = styled.p`
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const SecodeNormalAnimationText = styled.p`
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
  animation: ${slideUp} 3s linear infinite;
`;

const SecondStrongIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -353px;
  background-repeat: no-repeat;
  width: 9px;
  height: 6px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
`;
const SecondLightIcon = styled.p`
  margin-left: 10px;
  color: lightgray;
`;
const SecondStrongText = styled.p`
  cursor: pointer;
  margin-left: 10px;
  font-weight: 600;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

// 뉴스 회사
const ThirdContainer = styled.div`
  width: 95%;
  height: 49%;
  margin-top: 20px;
  border: 1px solid #e3e5e8;
  border-radius: 2%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const ThirdNewsContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e3e5e8;
  background-image: url(${(props) => props.backgroundImage});
  background-size: 50px 20px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

// 언론사 더보기
const FourthContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e3e5e8;
  margin-top: auto;
`;

const FourthLeftBtn = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -26px;
  background-repeat: no-repeat;
  width: 10px;
  height: 12px;
  transform: scaleX(-1);
  margin-right: 40px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350%;
    height: 300%;
    border: 1px solid lightgray;
    border-radius: 50%;
    z-index: -1;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const FourthBlueText = styled.p`
  font-size: 0.9rem;
  color: #7367ea;
  font-weight: 600;
`;

const FourthNormalText = styled.p`
  font-size: 0.9rem;
  color: #606060;
  margin-left: 5px;
  font-weight: 600;
`;

const FourthRightBtn = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -26px;
  background-repeat: no-repeat;
  width: 10px;
  height: 12px;
  margin-left: 40px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350%;
    height: 300%;
    border: 1px solid lightgray;
    border-radius: 50%;
    z-index: -1;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function MainNews() {
  const [textIndex, setTextIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const texts = [
    "속수무책 당한 러군, '심장' 모스크바 뚫릴뻔…美는 미리 알았다...",
    "올여름 장마 시작…중부·호남·경남 내일 출근길 폭우 대비...",
    "박진 '중국과 척질 이유 없어…한중 전략적 소통 계속 강화할것'...",
    "은행 분기 연체율 2년 9개월 만에 최고…한계기업 부실 우려↑...",
    "'사교육 카르텔'·허위과장광고 신고, 사흘간 40건 접수...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TopContainer>
      <FirstContainer>
        <FirstStrongText>뉴스스탠드</FirstStrongText>
        <FirstLightIcon>·</FirstLightIcon>
        <FirstLightText>언론사편집</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>엔터</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>스포츠</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>경제</FirstLightText>
      </FirstContainer>

      <SecondContainer>
        <SecodeNormalText>전체언론사</SecodeNormalText>
        <SecondStrongIcon></SecondStrongIcon>
        <SecondLightIcon>|</SecondLightIcon>
        <SecodeNormalText>연합뉴스</SecodeNormalText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecodeNormalAnimationText
          onAnimationStart={() => setAnimating(true)}
          onAnimationEnd={() => setAnimating(false)}
        >
          {texts[textIndex]}
        </SecodeNormalAnimationText>
        <SecodeNormalText style={{ marginLeft: "auto" }}>
          뉴스스탠드
        </SecodeNormalText>
        <SecondLightIcon>|</SecondLightIcon>
        <SecondStrongText>뉴스홈</SecondStrongText>
      </SecondContainer>

      <ThirdContainer>
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/915.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/819.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/948.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png" />
        <ThirdNewsContainer backgroundImage="https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png" />
      </ThirdContainer>

      <FourthContainer>
        <FourthLeftBtn />
        <FourthBlueText>언론사</FourthBlueText>
        <FourthNormalText>더보기 1/4</FourthNormalText>
        <FourthRightBtn />
      </FourthContainer>
    </TopContainer>
  );
}

export default MainNews;
