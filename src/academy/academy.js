import React from "react";
import { Header } from "../navbar/navbar";
import {
  AboutAcademyBox,
  Aminitiesbox,
  Bookslot,
  Bookslottxtstyled,
  ButtonContainer,
  CheckBox,
  Container,
  Groundimage,
  Imagecontainer,
  InputerCheckBoxBox,
  LetsPlayContainer,
  SampleButton,
  Textstyled,
  Discription,
  Abouttextstyled,
  Aminitiestextstyled,
  Horizontalline,
  Bookbutton,
  Inputstyled,
  Academywrapper,
  Styledboxwrapper,
} from "./academy.styled";
import {
  Aboutwrapper,
  Assetsimagebox,
  ContactButton,
  Headerasset,
  Navigationbar,
  Navigationwrapper,
  Whyassets,
} from "../navbar/navbar.styled";

export default function Academypage() {
  return (
    <>
      <Container>
        <Imagecontainer></Imagecontainer>
        <Headerasset>
          <Assetsimagebox>
            <Whyassets
              src="https://i.pinimg.com/564x/3b/78/80/3b78806abc9b73b2630782ad81e21dc6.jpg"
              alt="sportsacademy"
            />
          </Assetsimagebox>
          <Navigationwrapper>
            <Aboutwrapper>📖 Booking History</Aboutwrapper>
            <ContactButton>Login</ContactButton>
            <Navigationbar
              src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg"
              alt="navigation-menu"
            />
          </Navigationwrapper>
        </Headerasset>
        <Bookslot>
          <Bookslottxtstyled>
            <div>
              <h2>Sharpshooter sports Academy</h2>
              <span>
                📍 GMDC GROUND NEXT TO ALPHA ONE VASTARAPUR, University Area,
                Vastarapur, Ahmedabad 380052
              </span>
              <ButtonContainer>
                <SampleButton>Tennis</SampleButton>
                <SampleButton>Swimming</SampleButton>
                <SampleButton>Basketball</SampleButton>
                <SampleButton>Cricket</SampleButton>
                <SampleButton>Football </SampleButton>
              </ButtonContainer>
            </div>
            <Horizontalline></Horizontalline>
            <LetsPlayContainer>
              <Textstyled>
                <h1>Lets Play!</h1>
                <Discription> Select your sports to book you slot </Discription>
              </Textstyled>
              <Styledboxwrapper>
                <p>Sports</p>
                <Inputstyled placeholder="please select"></Inputstyled>
                <Bookbutton> Book Slot</Bookbutton>
              </Styledboxwrapper>
            </LetsPlayContainer>
          </Bookslottxtstyled>
          <Academywrapper>
            <AboutAcademyBox>
              <h1>About Academy </h1>
              <Abouttextstyled>
                Netural Color is mainly used in large of the text interface, in
                addition to the background , border diving lines and other
              </Abouttextstyled>
            </AboutAcademyBox>
          </Academywrapper>
          <Aminitiesbox>
            <Aminitiestextstyled>Aminities </Aminitiestextstyled>

            <CheckBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Drinking Water</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Setting Lounge</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Parking</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>First Aid</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Waiting Area</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Toilets</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Change room</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Drink Water</p>
              </InputerCheckBoxBox>
              <InputerCheckBoxBox>
                <input type="checkbox" />
                <p>Drinking Water</p>
              </InputerCheckBoxBox>
            </CheckBox>
          </Aminitiesbox>
        </Bookslot>
      </Container>
    </>
  );
}
