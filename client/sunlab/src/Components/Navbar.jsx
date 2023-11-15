import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll"; // For smooth scrolling
import logo from "../assets/images/Logo2.png";
import english from "../assets/images/english_flag.png";
import georgian from "../assets/images/georgia_flag.png";
import Translator from "../Components/Translation/Translator";
import { useLanguage } from "../providers/LanguageProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { setLanguage } = useLanguage();

  return (
    <Nav>
      <Link to="Home" smooth={true}>
        <Logo src={logo} alt="Logo" to="Home" />
      </Link>
      <NavItems>
        <Link to="Home" smooth={true}>
          <Translator>home</Translator>
        </Link>
        <Link to="About" smooth={true}>
          <Translator>about</Translator>
        </Link>
        <Link to="Gallery" smooth={true}>
          <Translator>gallery</Translator>
        </Link>
        <Link to="Contact" smooth={true}>
          <Translator>contact</Translator>
        </Link>
      </NavItems>
      <DropdownContainer>
        <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Translator>language</Translator>
        </DropdownButton>
        <DropdownContent isOpen={isDropdownOpen}>
          <Option
            onClick={() => {
              setLanguage("en");
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <Image src={english} alt="EN" />
            en
          </Option>
          <Option
            onClick={() => {
              setLanguage("ka");
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <Image src={georgian} alt="KA" />
            ka
          </Option>
        </DropdownContent>
      </DropdownContainer>
      <BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenu>
      {isMenuOpen && (
        <DropdownMenu>
          <Link to="Home" smooth={true} onClick={() => setIsMenuOpen(false)}>
            <Translator>home</Translator>
          </Link>
          <Link to="About" smooth={true} onClick={() => setIsMenuOpen(false)}>
            <Translator>about</Translator>
          </Link>
          <Link to="Gallery" smooth={true} onClick={() => setIsMenuOpen(false)}>
            <Translator>gallery</Translator>
          </Link>
          <Link to="Contact" smooth={true} onClick={() => setIsMenuOpen(false)}>
            <Translator>contact</Translator>
          </Link>
          {/* Language Dropdown */}
        </DropdownMenu>
      )}
    </Nav>
  );
};

export default Navbar;

// Styled components
const Nav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: white;
  z-index: 999;
`;

const Logo = styled.img`
  padding: 0.2;
  width: 8rem;
  height: 8rem;
`;

const NavItems = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin: 0 1rem;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BurgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: white;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 1rem;
  background-color: #444;
  padding: 1rem;
  border-radius: 8px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  a {
    display: block;
    margin-bottom: 1rem;
    color: white;
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid grey;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Option = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;
