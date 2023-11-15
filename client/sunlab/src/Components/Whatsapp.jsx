import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <ReactWhatsapp
      number="+995577493767"
      message="Hello can you provide me more details, გამარჯობა შეგიძლიათ დაწვრილებით მომაწოდოთ"
    >
      <FaWhatsapp />
    </ReactWhatsapp>
  );
};

export default Whatsapp;
