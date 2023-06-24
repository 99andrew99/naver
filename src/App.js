import React from 'react';
import styled from "styled-components";
import Header from './components/Header';
import MainTop from './components/MainTop';

const TopContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif;;
  width:100%;
  height: 300vh;
  display: flex;
  justify-content: center;

`

const MainContainer = styled.div`
  width: 70vw;
  height: 200vh;
  /* background-color: tomato; */
  /* background-color: #FEFEFE; */
`



function App() {



  return (
    <TopContainer>
      <MainContainer>
        <Header/>
        <MainTop/>
      </MainContainer>
    </TopContainer>
  );
}

export default App;