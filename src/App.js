import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import MainNews from "./components/MainNews";

const TopContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕",
    helvetica, "Apple SD Gothic Neo", sans-serif;
  width: 100%;
  height: 300vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderContainer = styled.div`
  width: 70vw;
  height: 30vh;
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  width: 70vw;
  height: 200vh;
  /* background-color: tomato; */
  /* background-color: #FEFEFE; */
`;
// first는 뉴스랑 웹툰
const FirstContainer = styled.div`
  width: 64%;
`;

//second는 로그인, 날씨, 증시, 웨젯보드
const SecondContainer = styled.div``;

function App() {
  return (
    <TopContainer>
      <HeaderContainer>
        <Header />
        <MainTop />
      </HeaderContainer>
      <MainContainer>
        <FirstContainer>
          <MainNews />
        </FirstContainer>
      </MainContainer>
    </TopContainer>
  );
}

export default App;
