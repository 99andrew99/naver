import styled, { css, keyframes } from "styled-components";
import { useState, useEffect } from "react";

const TopContainer = styled.div`
  width: 100%;
  height: 69vh;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: #f4f6fa;
`;

const FirstContainer = styled.div`
  width: 95%;
  height: 7%;
`;

const FirstText = styled.p`
  font-weight: 600;
  margin-right: auto;
`;

//캘린더, 메모
const SecondContainer = styled.div`
  width: 95%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondCalendar = styled.div`
  width: 48%;
  height: 100%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const SecondCalendarFirst = styled.p`
  font-weight: 600;
  margin-left: 10px;
`;

const SecondCalendarSecond = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin-left: 10px;
  margin-top: 20px;
`;

const LoginText = styled.p`
  font-size: 0.9rem;
  color: gray;
  text-decoration: underline;
  margin-left: 10px;
`;

const SecondMemo = styled.div`
  width: 48%;
  height: 100%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const MemoFirst = styled.div`
  width: 100%;
  height: 25%;
  background-color: #00bf6d;
  color: white;
  font-weight: 600;
  border-radius: 10px 10px 0 0;
`;

const MemoSecond = styled.div`
  width: 100%;
  height: 25%;
  border-top: 1px solid lightgray;
`;

const ThirdContainer = styled.div`
  width: 95%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Papago = styled.div`
  width: 48%;
  height: 100%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const PapagoFirst = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -164px -183px;
  background-repeat: no-repeat;
  width: 76px;
  height: 17px;
  margin-left: 10px;
`;

const PapagoSecond = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  width: 78px;
  height: 68px;
  margin-left: auto;
  margin-right: auto;
`;

const PapagoThird = styled.div`
  background-color: #00a2ff;
  width: 70%;
  height: 20%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #1280e2;
  }
`;

const Dictionary = styled.div`
  width: 48%;
  height: 100%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  background-image: url("/images/dictionary.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const FourthContainer = styled.div`
  width: 95%;
  height: 30%;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 20px;
`;

const FourthFirst = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: 0px -270px;
  background-repeat: no-repeat;
  width: 49px;
  height: 16px;
  margin-top: 20px;
  margin-left: 15px;
`;

const FourthSecondUl = styled.ul`
  width: 95%;
  height: 80%;
  overflow: hidden;
  padding-left: 0;
  display: flex;
`;
const FourthSecondLi = styled.li`
  width: 27%;
  height: 100%;
  list-style-type: none;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
const FourthImg = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 5px;
`;
const FourthText = styled.p`
  font-size: 0.8rem;
  width: 100%;
  height: 25%;
`;

const FifthContainer = styled.div`
  width: 95%;
  height: 7%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const FifthIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: 0px -368px;
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
`;

const FifthStrongText = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 10px;
`;

const FifthNormalText = styled.p`
  color: gray;
  font-size: 0.9rem;
  margin-left: 5px;
`;

const FifthRightArrow = styled.div`
  background-image: url("/images/logos.png");
  background-repeat: no-repeat;
  width: 8px;
  height: 12px;
  background-size: 422px 405px;
  background-position: -412px -217px;
  margin-left: auto;
`;

function Widget() {
  return (
    <TopContainer>
      <FirstContainer>
        <FirstText>위젯 보드</FirstText>
      </FirstContainer>

      <SecondContainer>
        <SecondCalendar>
          <SecondCalendarFirst>캘린더</SecondCalendarFirst>
          <SecondCalendarSecond>6.26</SecondCalendarSecond>
          <LoginText>로그인하기</LoginText>
        </SecondCalendar>
        <SecondMemo>
          <MemoFirst>
            <p style={{ marginLeft: "10px" }}>메모</p>
          </MemoFirst>
          <MemoSecond></MemoSecond>
          <MemoSecond></MemoSecond>
          <MemoSecond>
            <LoginText>로그인하기</LoginText>
          </MemoSecond>
        </SecondMemo>
      </SecondContainer>

      <ThirdContainer>
        <Papago>
          <PapagoFirst />
          <PapagoSecond />
          <PapagoThird>
            <p>번역하기</p>
          </PapagoThird>
        </Papago>
        <Dictionary />
      </ThirdContainer>

      <FourthContainer>
        <FourthFirst />
        <FourthSecondUl>
          <FourthSecondLi>
            <FourthImg src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230623_185%2F7KeMx_1687492106074rgcLP_PNG%2F1687492106010.png%22&type=f200_276&service=navermain"></FourthImg>
            <FourthText>지라시 초대석 라포엠</FourthText>
          </FourthSecondLi>

          <FourthSecondLi>
            <FourthImg src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230623_92%2F83tKA_1687513191642JA0qj_PNG%2F1687513191532.png%22&type=f200_276&service=navermain"></FourthImg>
            <FourthText>톰크루즈 내한</FourthText>
          </FourthSecondLi>

          <FourthSecondLi>
            <FourthImg src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230623_153%2Fw29AU_1687504813550jmShR_PNG%2F1687504813495.png%22&type=f200_276&service=navermain"></FourthImg>
            <FourthText>웰컴 투 판타지 월드 EP.2</FourthText>
          </FourthSecondLi>
        </FourthSecondUl>
      </FourthContainer>

      <FifthContainer>
        <FifthIcon />
        <FifthStrongText>모바일 네이버 메인</FifthStrongText>
        <FifthNormalText>열기</FifthNormalText>
        <FifthRightArrow />
      </FifthContainer>
    </TopContainer>
  );
}

export default Widget;
