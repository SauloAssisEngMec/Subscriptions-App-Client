import styled from "styled-components";
import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";

const HeroComponent = styled.header`
  background-image: url("https://images.unsplash.com/photo-1635372722656-389f87a941b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80");
  padding: 5rem 0;
  background-size: cover;
  height: 60vh;
  background-position: center;
`;

const HeaderContainer = styled.div`
  background-color: rgb(5, 148, 112);
  padding: 3rem;
  color: white;
  width: 32.5rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const SubHeading = styled.h3`
  fonte-weight: 1rem;
  margin: 1rem 0;
`;

const Hero = () => {
  return (
    <HeroComponent>
      <Container>
        <HeaderContainer>
          <Heading>Mathematics Article</Heading>
          <SubHeading>News and interest arcticle about Math</SubHeading>
          <ModalComponent variant="secondary" text="Signup" />
          <ModalComponent variant="danger" text="Login" />
        </HeaderContainer>
      </Container>
    </HeroComponent>
  );
};
export default Hero;
