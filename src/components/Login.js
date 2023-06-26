import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  height: 15vh;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FirstContainer = styled.p`
  width: 100%;
  /* height: 20%; */
  font-size: 0.9rem;
`;

const SecondContainer = styled.div`
  width: 90%;
  height: 35%;
  border-radius: 5px;
  background-color: #00d564;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #17b75e;
  }
`;

const SecondLogo = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -120px -166px;
  background-repeat: no-repeat;
  width: 72px;
  height: 14px;
`;
const SecondText = styled.p`
  margin-left: 10px;
`;

const ThirdContainer = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThirdText = styled.p`
  color: gray;
  margin-left: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ThirdIcon = styled.p`
  color: lightgray;
  margin-left: 10px;
`;

function Login() {
  return (
    <TopContainer>
      <FirstContainer>네이버를 더 안전하고 편리하게 이용하세요</FirstContainer>
      <SecondContainer>
        <SecondLogo />
        <SecondText>로그인</SecondText>
      </SecondContainer>
      <ThirdContainer>
        <ThirdText>아이디 찾기</ThirdText>
        <ThirdIcon>|</ThirdIcon>
        <ThirdText>비밀번호 찾기</ThirdText>
        <ThirdIcon>|</ThirdIcon>
        <ThirdText>회원가입</ThirdText>
      </ThirdContainer>
    </TopContainer>
  );
}

export default Login;
