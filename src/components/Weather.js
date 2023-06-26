import styled from "styled-components";

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
const FirstBox = styled.div`
  width: 70px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;
const FirstBoxIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -367px -391px;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
`;
const FirstBoxText = styled.p`
  font-size: 0.6rem;
  color: gray;
  margin-left: 3px;
`;
const FirstLightText = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-left: auto;
`;

const SecondContainer = styled.img`
  width: 95%;
  height: 70%;
  cursor: pointer;
`;

function Weather() {
  return (
    <TopContainer>
      <FirstContainer>
        <FirstStrongText>날씨</FirstStrongText>
        <FirstBox>
          <FirstBoxIcon />
          <FirstBoxText>예보 비교</FirstBoxText>
        </FirstBox>
        <FirstLightText>서울시 양재동</FirstLightText>
      </FirstContainer>
      <SecondContainer src="/images/weatherImg.png"></SecondContainer>
    </TopContainer>
  );
}

export default Weather;
