import { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/images/img3.jpeg";
import img2 from "../assets/images/img4.jpeg";
import img3 from "../assets/images/img5.jpeg";
import img4 from "../assets/images/img7.jpeg";
import Translator from "../Components/Translation/Translator";

const Gallery = () => {
  const images = [img1, img2, img3, img4]; // Replace with your image URLs

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  const setSlide = (slide) => setCurrentSlide(slide);

  return (
    <GalleryContainer id="Gallery">
      <GalleryHeader>
        <Translator>gallery</Translator>
      </GalleryHeader>
      <SliderContainer>
        <LeftArrow onClick={prevSlide}>&lt;</LeftArrow> {/* Left Arrow */}
        <Slider>
          {images.map((image, index) => (
            <Slide
              key={index}
              style={{ transform: `translateX(${-currentSlide * 100}%)` }}
            >
              <img src={image} alt={`Slide ${index}`} />
            </Slide>
          ))}
        </Slider>
        <RightArrow onClick={nextSlide}>&gt;</RightArrow> {/* Right Arrow */}
      </SliderContainer>
      <Dots>
        {images.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setSlide(index)}
          />
        ))}
      </Dots>
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-bottom: 6.5rem;
`;

const GalleryHeader = styled.h1`
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Slider = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 100%; // This ensures each slide takes up the full width of the container
  display: flex; // Use flexbox for alignment
  justify-content: center; // Center the image in the slide
  align-items: center; // Center the image vertically
  overflow: hidden; // Hide overflow to maintain the clean edges of each slide
  height: 40rem; // Set a fixed height for each slide

  img {
    height: 100%; // Set image height to fill the slide height
    width: auto; // Set image width to auto to maintain aspect ratio
    max-width: 100%; // Ensure image does not exceed the slide width
  }

  @media (max-width: 768px) {
    height: 25rem;
    img {
      height: 100%; // Set image height to fill the slide height
      width: auto; // Set image width to auto to maintain aspect ratio
      max-width: 100%; // Ensure image does not exceed the slide width
    }
  }
`;

const Arrow = styled.span`
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
  user-select: none;
  padding: 0 10px; // Adjust padding as needed
`;

const LeftArrow = styled(Arrow)``;

const RightArrow = styled(Arrow)``;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;
`;

const Dot = styled.span`
  padding: 8px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? "black" : "grey")};
`;
