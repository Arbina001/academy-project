import {
  Hadersection,
  Container,
  Headerasset,
  Haederwrapper,
  Assetsimagebox,
  Whyassets,
  Navigationbar,
  Navigationwrapper,
  Aboutwrapper,
  ContactButton,
  Loginbutton,
} from "./navbar.styled";

export function Header() {
  return (
    <>
      <Hadersection>
        <Container>
          <Haederwrapper>
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
          </Haederwrapper>
        </Container>
      </Hadersection>
    </>
  );
}
