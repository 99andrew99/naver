import styled from "styled-components";

const TopContainer = styled.div`
  width: 100%;
  height: 125vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e5e8;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
`;

// 추천*구독, 자동차, 웹툰, 패션뷰티, 레시피, 리빙, 책방, 지식+
const FirstContainer = styled.div`
  width: 95%;
  height: 7vh;
  display: flex;
`;

const FirstLightText = styled.p`
  font-size: 1.1rem;
  color: gray;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FirstLightIcon = styled.p`
  color: lightgray;
  margin-left: 10px;
  font-size: 1.2rem;
`;

const FirstStrongText = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

//웹툰홈 ~~
const SecondContainer = styled.div`
  width: 95%;
  height: 6vh;
  background-color: #f5f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondStrongText = styled.p`
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SecondLightIcon = styled.p`
  color: lightgray;
  margin-left: 8px;
`;

const SecondNormalText = styled.p`
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

//일요웹툰 일요웹툰 전체보기 && 웹툰들
const ThirdContainer = styled.div`
  width: 95%;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const ThirdFirstContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

const ThirdTopStrongText = styled.p`
  font-weight: 600;
`;

const ThirdTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThirdTopNormalText = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ThirdRightArrow = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -412px -26px;
  background-repeat: no-repeat;
  width: 10px;
  height: 12px;
  margin-left: 5px;
`;

const ThirdSecondContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const ThirdSecondImageTextConatiner = styled.div`
  width: 80%;
  height: 90%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const ThirdSecondImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.1s; /* 호버 효과를 부드럽게 만들기 위한 트랜지션 설정 */

  &:hover {
    transform: scale(1.1); /* 이미지를 1.2배 확대 */
  }
`;

const ThirdSeondText = styled.p`
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const ThirdSecondWriter = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-top: -10px;
`;

//이번주 가장 많이 본 웹툰 ~~
const FourthContainer = styled.div`
  width: 95%;
  height: 25vh;
  /* background-color: tomato; */
  margin-top: 80px;
`;

//이번주 가장 많이 본 웹툰, 신작, 완결
const FourthFirstContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4vh;
  align-items: center;
`;
const FourthFirstStrong = styled.p`
  /* font-size: 0.9rem; */
  font-weight: 600;
`;
const FourthFirstLightIcon = styled.p`
  margin-left: 10px;
  color: lightgray;
`;

const FourthFirstGreen = styled.div`
  width: 50px;
  height: 30px;
  color: white;
  background-color: #00d564;
  font-weight: 600;
  border-radius: 20px;
  justify-content: center;
  margin-left: 20px;
  display: flex;
  align-items: center;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FourthFirstLightText = styled.p`
  margin-left: 20px;
  color: gray;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

//웹툰들
const FourthSecondContainer = styled.div`
  width: 95%;
  height: 20vh;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
`;

const FourthSecondImageTextConatiner = styled.div`
  width: 100%;
  height: 90%;

  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const FourthSecondImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.1s; /* 호버 효과를 부드럽게 만들기 위한 트랜지션 설정 */

  &:hover {
    transform: scale(1.1); /* 이미지를 1.2배 확대 */
  }
`;

const FourthSeondText = styled.p`
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const FourthSecondWriter = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-top: -10px;
`;

const FourthSecondGreen = styled.p`
  font-size: 0.8rem;
  color: #00d564;
`;
//시리즈 에디션
const FifthContainer = styled.div`
  width: 95%;
  height: 25vh;
  border-top: 1px solid lightgray;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const FifthFirstContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4vh;
  align-items: center;
  margin-top: 20px;
`;
const FifthFirstStrong = styled.p`
  /* font-size: 0.9rem; */
  font-weight: 600;
`;

const FifthSecondContainer = styled.div`
  width: 95%;
  height: 20vh;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
`;

const FifthSecondImageTextConatiner = styled.div`
  width: 100%;
  height: 90%;

  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const FifthSecondImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.1s; /* 호버 효과를 부드럽게 만들기 위한 트랜지션 설정 */

  &:hover {
    transform: scale(1.1); /* 이미지를 1.2배 확대 */
  }
`;

const FiftjSecondIcon = styled.div`
  background-image: url("/images/logos.png");
  background-size: 422px 405px;
  background-position: -155px -316px;
  background-repeat: no-repeat;
  width: 25px;
  height: 17px;
`;

const FifthSeondText = styled.p`
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const FifthSecondWriter = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-top: -10px;
`;

//펼처보기
const SixthContainer = styled.div`
  width: 100%;
  height: 6vh;
  margin-top: auto;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Webtoon() {
  return (
    <TopContainer>
      <FirstContainer>
        <FirstLightText>추천 · 구독</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>자동차</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstStrongText>웹툰</FirstStrongText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>패션뷰티</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>레시피</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>리빙</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>책방</FirstLightText>
        <FirstLightIcon>/</FirstLightIcon>
        <FirstLightText>지식+</FirstLightText>
      </FirstContainer>

      <SecondContainer>
        <SecondStrongText>웹툰홈</SecondStrongText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>요일별웹툰</SecondNormalText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>베스트도전</SecondNormalText>

        <SecondLightIcon>|</SecondLightIcon>

        <SecondStrongText>웹소설홈</SecondStrongText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>시리즈에디션</SecondNormalText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>베스트리그</SecondNormalText>

        <SecondLightIcon>|</SecondLightIcon>

        <SecondStrongText>시리즈홈</SecondStrongText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>웹소설</SecondNormalText>
        <SecondLightIcon>·</SecondLightIcon>
        <SecondNormalText>만화</SecondNormalText>
      </SecondContainer>

      <ThirdContainer>
        <ThirdFirstContainer>
          <ThirdTopStrongText>일요웹툰</ThirdTopStrongText>
          <ThirdTopContainer>
            <ThirdTopNormalText>일요웹툰 전체보기</ThirdTopNormalText>
            <ThirdRightArrow />
          </ThirdTopContainer>
        </ThirdFirstContainer>

        <ThirdSecondContainer>
          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F811721%2Fthumbnail%2Fthumbnail_IMAG21_9a2a959a-666b-4156-8e4f-db64dfe319c6.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>무직백수 계백순</ThirdSeondText>
            <ThirdSecondWriter>지발</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F736277%2Fthumbnail%2Fthumbnail_IMAG21_bbbe3f76-021e-4dbc-830a-4358c1abec0c.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>싸움독학</ThirdSeondText>
            <ThirdSecondWriter>박태준 만화회사...</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F710751%2Fthumbnail%2Fthumbnail_IMAG21_53aefc06-6bdf-40fb-93ac-fab7242146c6.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>약한영웅</ThirdSeondText>
            <ThirdSecondWriter>서패스 / 김진석</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F758150%2Fthumbnail%2Fthumbnail_IMAG21_4135492154714961716.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>입학용병</ThirdSeondText>
            <ThirdSecondWriter>YC / 락현</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F774044%2Fthumbnail%2Fthumbnail_IMAG21_81504afb-1a05-41b0-9650-0c9aa1d741d9.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>투신전생기</ThirdSeondText>
            <ThirdSecondWriter>청담</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F795262%2Fthumbnail%2Fthumbnail_IMAG21_6904a7bd-e806-4f49-9b00-ee882a86fd4b.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>사형소년</ThirdSeondText>
            <ThirdSecondWriter>박태준만화회사...</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F703844%2Fthumbnail%2Fthumbnail_IMAG21_5ddcb40e-1f6a-40f3-b2c4-6cd9a7eee843.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>가비지타임</ThirdSeondText>
            <ThirdSecondWriter>2사장</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F779632%2Fthumbnail%2Fthumbnail_IMAG21_4048795649913205816.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>일타강사 백사부</ThirdSeondText>
            <ThirdSecondWriter>팀 더 자크 / 오...</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F774831%2Fthumbnail%2Fthumbnail_IMAG21_b4644a73-ecfb-4532-a96c-575b02accfd0.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>수희0(tngmlek0)</ThirdSeondText>
            <ThirdSecondWriter>생일기분</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F798664%2Fthumbnail%2Fthumbnail_IMAG21_38708e4d-5ed5-4301-b4a6-b9e794b173c4.jpeg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>자매전쟁</ThirdSeondText>
            <ThirdSecondWriter>기맹기</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F803909%2Fthumbnail%2Fthumbnail_IMAG21_764d377c-fe45-40f9-8775-0f6ff92ad421.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>나 혼자 특성빨로 무한 성장</ThirdSeondText>
            <ThirdSecondWriter>샤이아탄 / 2사...</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>

          <ThirdSecondImageTextConatiner>
            <ThirdSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F805193%2Fthumbnail%2Fthumbnail_IMAG21_47d9dfe3-8e58-43ba-b9c1-ad18673068cb.jpg%22&type=nf216_280&service=navermain" />
            <ThirdSeondText>천화서고 대공자</ThirdSeondText>
            <ThirdSecondWriter>123 / MIDNIGH...</ThirdSecondWriter>
          </ThirdSecondImageTextConatiner>
        </ThirdSecondContainer>
      </ThirdContainer>

      <FourthContainer>
        <FourthFirstContainer>
          <FourthFirstStrong>이번주 가장 많이 본 웹툰</FourthFirstStrong>
          <FourthFirstLightIcon>|</FourthFirstLightIcon>
          <FourthFirstGreen>신작</FourthFirstGreen>
          <FourthFirstLightText>완결</FourthFirstLightText>
        </FourthFirstContainer>

        <FourthSecondContainer>
          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F809590%2Fthumbnail%2Fthumbnail_IMAG21_4baeeccb-9e08-4678-9626-1b2041dea5f8.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>1</strong> 이번생도 잘 부탁해 - 기억...
            </FourthSeondText>
            <FourthSecondWriter>이혜</FourthSecondWriter>
            <FourthSecondGreen>이번 생도 잘 부...</FourthSecondGreen>
          </FourthSecondImageTextConatiner>

          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F811721%2Fthumbnail%2Fthumbnail_IMAG21_9a2a959a-666b-4156-8e4f-db64dfe319c6.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>2</strong> 무직백수 계백순
            </FourthSeondText>
            <FourthSecondWriter>지발</FourthSecondWriter>
            <FourthSecondGreen></FourthSecondGreen>
          </FourthSecondImageTextConatiner>

          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F809625%2Fthumbnail%2Fthumbnail_IMAG21_15dd153c-6e74-4628-9429-ab469095cdae.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>3</strong> 시한부 천재 암흑기사
            </FourthSeondText>
            <FourthSecondWriter>정선율 / 나기</FourthSecondWriter>
            <FourthSecondGreen>신화급 귀속 아...</FourthSecondGreen>
          </FourthSecondImageTextConatiner>

          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F809706%2Fthumbnail%2Fthumbnail_IMAG21_e36ff5e5-2edf-417d-ae14-c5fa9d8ca924.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>4</strong> 사랑받는 시집살이
            </FourthSeondText>
            <FourthSecondWriter>견이 / 태소정</FourthSecondWriter>
            <FourthSecondGreen></FourthSecondGreen>
          </FourthSecondImageTextConatiner>

          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F809618%2Fthumbnail%2Fthumbnail_IMAG21_118a7124-11b6-4eed-b04a-20ee139256c1.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>5</strong> 신과함께 돌아온 기사왕님
            </FourthSeondText>
            <FourthSecondWriter>지대공마법소년...</FourthSecondWriter>
            <FourthSecondGreen></FourthSecondGreen>
          </FourthSecondImageTextConatiner>

          <FourthSecondImageTextConatiner>
            <FourthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimage-comic.pstatic.net%2Fwebtoon%2F809694%2Fthumbnail%2Fthumbnail_IMAG21_2dded0a5-e188-4ed4-8139-d273185aedb2.jpg%22&type=nf216_280&service=navermain" />
            <FourthSeondText>
              <strong>6</strong> 첫사랑은 헤이트
            </FourthSeondText>
            <FourthSecondWriter>망두</FourthSecondWriter>
            <FourthSecondGreen></FourthSecondGreen>
          </FourthSecondImageTextConatiner>
        </FourthSecondContainer>
      </FourthContainer>

      <FifthContainer>
        <FifthFirstContainer>
          <FifthFirstStrong>시리즈에디션</FifthFirstStrong>
        </FifthFirstContainer>

        <FifthSecondContainer>
          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20230522_129%2Fpocket_1684745007173F4l14_PNG%2Fcover.png%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>
                {<FiftjSecondIcon style={{ display: "inline-block" }} />}전지적
                독자시점
              </FifthSeondText>
            </div>
            <FifthSecondWriter>싱숑</FifthSecondWriter>
          </FifthSecondImageTextConatiner>

          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20201104_244%2Fpocket_1604475517252sB81s_JPEG%2F___.jpg%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>역대급 영지 설계사 [독점]</FifthSeondText>
            </div>
            <FifthSecondWriter>문백경 / 망기</FifthSecondWriter>
          </FifthSecondImageTextConatiner>

          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20230605_32%2Fpocket_1685943429068BsTBH_JPEG%2F%25B3%25B2%25C1%25D6_%25C1%25BB_%25B3%25B3%25C4%25A1%25C7%25D5%25BD%25C3%25B4%25D9_2%25C2%25F7_%25C5%25B8%25C0%25CC%25C6%25B2_%25C3%25D6%25C1%25BE%2528%25BD%25C3%25B8%25AE%25C1%25EE_MIX5%25BF%25EB%2529.jpg%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>남주 좀 납치합시다! [독점]</FifthSeondText>
            </div>
            <FifthSecondWriter>단시오</FifthSecondWriter>
          </FifthSecondImageTextConatiner>

          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20230528_149%2Fpocket_1685274821885gib1W_JPEG%2Fanima_S_cover.jpg%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>
                {" "}
                {<FiftjSecondIcon style={{ display: "inline-block" }} />}귀령
                [독점]
              </FifthSeondText>
            </div>
            <FifthSecondWriter>월하야담</FifthSecondWriter>
          </FifthSecondImageTextConatiner>

          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20230620_250%2Fpocket_1687240490399jevUC_JPEG%2Fbastian_cover.jpg%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>바스티안 [독점] [에디티드 버전]</FifthSeondText>
            </div>
            <FifthSecondWriter>솔체</FifthSecondWriter>
          </FifthSecondImageTextConatiner>

          <FifthSecondImageTextConatiner>
            <FifthSecondImage src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fcomicthumb-phinf.pstatic.net%2F20230105_236%2Fpocket_1672891041689Lt5ft_JPEG%2F%25C0%25FD%25B4%25EB%25C8%25B8%25B1%25CD.jpg%22&type=nf216_312&service=navermain" />
            <div>
              <FifthSeondText>절대회귀 [독점]</FifthSeondText>
            </div>
            <FifthSecondWriter>장영훈</FifthSecondWriter>
          </FifthSecondImageTextConatiner>
        </FifthSecondContainer>
      </FifthContainer>

      <SixthContainer>
        <p style={{ fontSize: "0.8rem", fontWeight: "600", cursor: "pointer" }}>
          펼쳐보기
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "900",
            color: "#00d564",
            marginLeft: "5px",
            cursor: "pointer",
          }}
        >
          +
        </p>
      </SixthContainer>
    </TopContainer>
  );
}

export default Webtoon;
