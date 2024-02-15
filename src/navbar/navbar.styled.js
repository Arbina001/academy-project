import styled from "styled-components";

export const DashboardSection = styled.div``;
export const Container = styled.div``;

export const Hadersection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const Hadercontainer = styled.div`
  background-color: white;
`;

export const Haederwrapper = styled.div`
  margin: 20px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const Headerasset = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: 354px;
  }
`;

export const Assetsimagebox = styled.div`
  width: 100%;
  max-width: 440px;
  height: 71px;
  object-fit: contain;

  @media (max-width: 991px) {
    margin: 12px 71px 6px 12px;
  }
`;

export const Whyassets = styled.img`
  width: 100%;
  max-width: 90px;
  height: 63px;
  position: relative;
`;

export const Aboutwrapper = styled.button`
  width: 100%;
  max-width: 150px;
  height: 27px;
  position: relative;
  font-size: 16px;
  line-height: 2px;
  text-align: left;
  color: black;
  background-color: transparent;
  border: none;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  max-width: 106px;
  height: 38px;
  border-radius: 10px;
  background-color: pink;
  border: 1px solid #fff;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Loginbutton = styled.p`
  color: #000000;
  padding: 10px 20px;
  position: relative;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #cccccc;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const Navigationbar = styled.img`
  display: none;

  @media (max-width: 991px) {
    display: block;
    width: 100%;
    max-width: 40px;
    height: 63px;
    position: absolute;
  }
`;

export const Navigationwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 67px;
  }
`;
