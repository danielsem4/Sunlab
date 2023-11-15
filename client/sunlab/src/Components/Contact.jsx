import { useState } from "react";
import styled from "styled-components";
import Translator from "../Components/Translation/Translator";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dkhe9g2",
        "template_hj4233t",
        e.target,
        "5zTR8_wWbN_QVfvI4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header>
        <Translator>contact</Translator>
      </Header>
      <ContactForm id="Contact" onSubmit={sendEmail}>
        <label htmlFor="name">
          <Translator>contact-form-name</Translator>
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">
          <Translator>contact-form-email</Translator>
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">
          <Translator>contact-form-message</Translator>
        </label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          <Translator>contact-form-button</Translator>
        </Button>
      </ContactForm>
    </>
  );
};

export default ContactUs;

// Styled-components
const Header = styled.h1`
  text-align: center;
  color: #ffffff; // You can change the color as per your preference
  margin-bottom: 20px; // Adjust spacing as needed

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  max-width: 50rem; // Increased size
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.773);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 15rem;
  padding: 10px;
  border: none;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #9e861b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
