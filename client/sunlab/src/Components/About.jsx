import styled from "styled-components";
import homeBackground1 from "../assets/images/HomeBackground2.png";
import Translator from "../Components/Translation/Translator";

const About = () => {
  return (
    <AboutContainer id="About">
      <TextSection>
        <AboutTitle>
          <Translator>about-title</Translator>
        </AboutTitle>
        <AboutText>
          <Translator>about-subtitle1</Translator>
        </AboutText>
        <AboutText>
          <Translator>about-subtitle2</Translator>
        </AboutText>
        <AboutText>
          <Translator>
            <about-subtitle2></about-subtitle2>
          </Translator>
        </AboutText>
      </TextSection>
      <ImageSection>
        <StyledImage src={homeBackground1} alt="Description of the image" />
      </ImageSection>
    </AboutContainer>
  );
};

export default About;

// Styled container for the entire component
const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const AboutTitle = styled.h1`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Styled div for the text section
const TextSection = styled.div`
  flex: 1;
  padding-right: 20px; // Add some spacing between text and image
`;

const AboutText = styled.p`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Styled div for the image section
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

// Styled image
const StyledImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
