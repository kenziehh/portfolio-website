import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ContactCard from "./components/ContactCard";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section
      className="container flex flex-col pt-20 gap-16 h-screen mt-40"
      id="contact"
    >
      <h1>Contact Me</h1>
      <div className="flex justify-between flex-col lg:flex-row">
        <ContactCard
          icon={<BsLinkedin size={25} />}
          name="Linkedin"
          alias="Kenzie Taqiyassar"
          href="https://www.linkedin.com/in/kenzie-taqiyassar-37458b1aa/"
        />
        
        <ContactCard
          icon={<TfiEmail size={25} />}
          name="Email"
          alias="@ghaisani.nurani@gmail.com"
          href="mailto:ghaisani.nurani@gmail.com"
        />
        <ContactCard
          icon={<BsWhatsapp size={25} />}
          name="Whatsapp"
          alias="08213193850"
          href="tel:08213193850"
        />
        <ContactCard
          icon={<BsInstagram size={25} />}
          name="Instagram"
          alias="@_kenziehh"
          href="https://www.instagram.com/_kenziehh/"
        />
      </div>
    </section>
  );
};

export default Contact;
