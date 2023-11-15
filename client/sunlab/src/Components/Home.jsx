import styled from "styled-components";
import homeBackground1 from "../assets/images/HomeBackground4.png";
import Translator from "../Components/Translation/Translator";

const Home = () => {
  return (
    <Container id="Home">
      <GlowingTextHeader>
        <Translator>welcome</Translator>
      </GlowingTextHeader>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-image: url(${homeBackground1});
  background-size: cover;
  background-position: center;
  height: 100vh; // Adjust the height as needed
  width: 100%; // Set the width to 100%
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    // Adjustments for mobile devices
  }
`;

const GlowingTextHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 3.5rem; // Adjust font size as needed
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0000ff, 0 0 40px #3939d5,
    0 0 50px #f9f9f9, 0 0 60px #0000ff, 0 0 70px #0000ff;
  // Add more glow or adjust colors as desired

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
