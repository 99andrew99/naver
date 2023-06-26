import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #f5f6f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

function Footer() {
  return (
    <TopContainer>
      <Text>Made By Min Seok Cho</Text>
    </TopContainer>
  );
}

export default Footer;
