import styled from "styled-components";




const TopContainer = styled.div`
    width: 70vw;
    height:30vh;
    /* background-color: blue; */
    border: 1px solid black;
    display: flex;
`
// 햄버거
const FirstConatiner = styled.div`
    width: 20vw;
    height: 20vh;
`

const Hamburger = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -335px -284px;
    background-repeat: no-repeat;
    width: 26px;
    height: 26px;
    position: relative;
    cursor: pointer;
    
    &:hover::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 170%;
        height: 170%;
        background-color: #F5F7F8;
        border-radius: 50%;
        z-index: -1;
    }
`


// 검색창, 아이콘들
const SecondContainer = styled.div`
    width: 40vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SearchContainer = styled.div`
    width:100%;
    height: 6.5vh;
    display: flex;
    align-items: center;
    border: 1px solid #03c75a;
    border-radius: 33px;
    justify-content: space-around;
    margin-top: auto;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`

const MainLogo = styled.svg`
    fill: #03c75a;
    width: 25px;
    height: 25px;
    cursor: pointer;
`
const SearchInput = styled.input`
    width: 50%;
    height: 30%;
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
`
const SearchIconsContainer = styled.div`
    /* width: 280px; */
    display: flex;
    align-items: center;
`
const KeyboardImg = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -270px -234px;
    background-repeat: no-repeat;
    width: 24px;
    height: 16px;
    cursor: pointer;

    &:hover{
        filter: grayscale(100%);
    }
`

const ArrowImg = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -412px -339px;
    background-repeat: no-repeat;
    width: 10px;
    height: 6px;
    margin-left: 10px;
`

const SearchImg = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -364px -132px;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    margin-left: 10px;
`



const BottomIconsContainer = styled.div`
    width:100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
`
const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`
const Mail = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -250px -90px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;

    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Cafe = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -250px 0px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Blog = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -201px -98px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Shopping = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -90px -209px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const News = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: 0px -209px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Securities = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -180px -209px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const RealEstate = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -45px -209px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Map = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -201px 0px;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`

const Webtoon = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -225px -209px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`
const Etc = styled.div`
    background-image: url("/images/logos.png");
    background-size: 422px 405px;
    background-position: -250px -135px;
    background-repeat: no-repeat;
    width: 44px;
    height: 44px;
    border: 2px solid #F6F4F4;
    border-radius: 35%;
    margin-bottom: 2px;
    &:hover{
        box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1);
    }
`


//페이, 알림, 광고
const ThirdContainer = styled.div`
    width: 20vw;
    height: 20vh;
`


function MainTop() {


    return(
        <TopContainer>
            <FirstConatiner>
                <Hamburger/>
            </FirstConatiner>
            <SecondContainer>
                <SearchContainer>
                    <MainLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                     </MainLogo>
                    <SearchInput title="검색어를 입력해 주세요." placeholder="| 검색어를 입력해 주세요." />
                    <SearchIconsContainer>
                        <KeyboardImg/>
                        <ArrowImg/>
                        <SearchImg/>
                    </SearchIconsContainer>
                </SearchContainer>
                <BottomIconsContainer>
                    <IconsContainer>
                        <Mail/>
                        <span>메일</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Cafe/>
                        <span>카페</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Blog/>
                        <span>블로그</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Shopping/>
                        <span>쇼핑</span>
                    </IconsContainer>
                    <IconsContainer>
                        <News/>
                        <span>뉴스</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Securities/>
                        <span>증권</span>
                    </IconsContainer>
                    <IconsContainer>
                        <RealEstate/>
                        <span>부동산</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Map/>
                        <span>지도</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Webtoon/>
                        <span>웹툰</span>
                    </IconsContainer>
                    <IconsContainer>
                        <Etc/>
                        <span style={{opacity: 0}}>기타</span>
                    </IconsContainer>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                </BottomIconsContainer>
            </SecondContainer>
            <ThirdContainer></ThirdContainer>
        </TopContainer>
    );
}
export default MainTop;

