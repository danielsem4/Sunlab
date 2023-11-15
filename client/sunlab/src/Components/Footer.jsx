import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Whatsapp from "./Whatsapp";
import Translator from "../Components/Translation/Translator";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>
          <Translator>footer-title</Translator>
        </h2>
        <SocialMedia>
          <a
            href="https://www.facebook.com/ssunkids?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sunkids777/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <Whatsapp />
          </a>
        </SocialMedia>
      </FooterContent>
      <LegalSection>
        <div>
          <LegalLink href="#">Terms & Conditions</LegalLink>
          <LegalLink href="#">Privacy</LegalLink>
          <LegalLink href="#">Security</LegalLink>
        </div>
        <div>©2023 Klutz. All rights reserved.</div>
      </LegalSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialMedia = styled.div`
  a {
    margin: 0 10px;
    color: white;
    transition: color 0.3s ease;
    font-size: 36px; // Increased icon size

    &:hover {
      color: #4c8bf5;
    }

    @media (max-width: 768px) {
      margin: 0 5px;
      font-size: 28px; // Slightly smaller icons for mobile devices
    }
  }
`;

const LegalSection = styled.div`
  text-align: center;
  border-top: 1px solid #444;
  padding-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const LegalLink = styled.a`
  color: white;
  margin: 0 15px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;
