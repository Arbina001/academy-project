import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 250px;
  max-width: 1300px;
  background: url(https://assets-global.website-files.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min-p-800.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Imagecontainer = styled.div``;
export const Groundimage = styled.img`
  width: 100%;
  height: 250px;
`;
export const Bookslot = styled.div`
  width: 100%;
  max-width: 1056px;
  margin: 100px 0px 0px 74px;
  height: 255px;
  padding: 20px;
  z-index: 1;
  position: absolute;
  border: 1px solid;
  background: #fff;

  @media (max-width: 991px) {
    margin: 51px 0px 0px 40px;
    max-width: 264px;
    height: 490px;
  }
`;

export const Bookslottxtstyled = styled.div`
  font-size: 14px;
  font-weight: 500;

  @media (max-width) {
    font-size: 10px;
  }

`;
export const Sportsbox = styled.div``;
export const Aminitiesbox = styled.div`
  width: 100%;
  border: 1px solid;
  height: 200px;
  padding: 20px;

  @media (max-width: 991px) {
    position: relative;
    right: 20px;
  }
`;

export const SampleButton = styled.div`
  border: 1px solid;
  border-radius: 33px;
  width: 100%;
  max-width: 32px;
  padding: 8px;
  text-align: center;
  margin: 7px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 70px;
  margin: 10px;

  @media (max-width: 991px) {
    /* flex-direction: column; */
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
    max-width: 195px;
    margin: 10px;
    flex-direction: row;
    align-content: space-around;
    flex-wrap: wrap;
  }
`;

export const LetsPlayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    /* max-width:400px ; */
  }
`;

export const Aboutwrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const AboutAcademyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin: 20px; */
  /* margin: 75px 0px 0px 0px; */
  max-width: 650px;

  @media (max-width: 991px) {
    position: relative;
    left: -36px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InputerCheckBoxBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  /* margin: 12px; */
  padding: 0 33px 12px 12px;
`;
export const Textstyled = styled.span`
  color: blue;
`;
export const Discription = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
export const Abouttextstyled = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const Aminitiestextstyled = styled.h2`
  padding: 0 0 0 16px;
`;

export const Horizontalline = styled.hr`
  border-top: dashed 1px;
`;

export const Bookbutton = styled.button`
  height: 35px;

  @media (max-width:991px) {
    margin: 8px 0;
  }
`;
export const Inputstyled = styled.input`
  height: 27px;
  width: 100%;
  max-width: 300px;
  margin: 0px 28px 0 0px;

  @media (max-width) {
    max-width: 226px;
  }
`;

export const Academywrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const Styledboxwrapper = styled.div`
@media (max-width:991px) {
  position: relative;
    top: -10px;
    left: 31px;
}
`;
