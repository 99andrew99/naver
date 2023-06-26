import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import MainNews from "./components/MainNews";
import Webtoon from "./components/Webtoon";
import Login from "./components/Login";
import Weather from "./components/Weather";
import StockMarket from "./components/StockMarket";
import Widget from "./components/Widget";
import Footer from "./components/Footer";

const TopContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕",
    helvetica, "Apple SD Gothic Neo", sans-serif;
  width: 100%;
  height: 230vh;
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
  height: 190vh;
  display: flex;
  /* background-color: tomato; */
  /* background-color: #FEFEFE; */
`;
// first는 뉴스랑 웹툰
const FirstContainer = styled.div`
  width: 64%;
`;

//second는 로그인, 날씨, 증시, 웨젯보드
const SecondContainer = styled.div`
  width: 30%;
  margin-left: 30px;
`;

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
          <Webtoon />
        </FirstContainer>

        <SecondContainer>
          <Login />
          <Weather />
          <StockMarket />
          <Widget />
        </SecondContainer>
      </MainContainer>

      <Footer />
    </TopContainer>
  );
}

export default App;
