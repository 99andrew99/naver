import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const slideInAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const TopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 7vh;
  background-color: white;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #03c75a;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  animation: ${({ visible }) => (visible ? slideInAnimation : "none")};
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  background-color: white;
  z-index: 2;
`;

/* 로고 */
const MainLogo = styled.svg`
  fill: #03c75a;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

/* 검색창 */
const SearchContainer = styled.div`
  width: 480px;
  margin-left: 30px;
  height: 100%;
  /* background-color: aliceblue; */
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 17px 0;
  box-sizing: border-box;
  font-size: 1.4rem;
  line-height: 24px;
  font-weight: 400;
  outline: 0;
  color: #000;
  border-radius: 0;
  border: 0;

  &::placeholder {
    color: lightgray;
  }
`;

/* 키보드, 화살표, 돋보기 */
const IconContainer = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
`;
const KeyboardImg = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -270px -234px;
  background-repeat: no-repeat;
  width: 24px;
  height: 16px;
  cursor: pointer;

  &:hover {
    filter: grayscale(100%);
  }
`;

const ArrowImg = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -339px;
  background-repeat: no-repeat;
  width: 10px;
  height: 6px;
  margin-left: 10px;
`;

const SearchImg = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -364px -132px;
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TopContainer visible={visible}>
      <MainLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
      </MainLogo>

      <SearchContainer>
        <SearchInput
          title="검색어를 입력해 주세요."
          placeholder="| 검색어를 입력해 주세요."
        ></SearchInput>
      </SearchContainer>

      <IconContainer>
        <KeyboardImg />
        <ArrowImg />
        <SearchImg />
      </IconContainer>
    </TopContainer>
  );
}

export default Header;
