import Button from "./Button";
import { Link } from "react-scroll";
import cv from "./../assets/CV.pdf"

const Navbar = () => {
    return (
    <nav className="fixed top-0 bg-white flex justify-between items-center container py-4">
      <h3 className="hidden md:block">Kenziehh</h3>
      <div className="flex gap-6 text-secGray">
        <Link
          to="profile"
          smooth={true}
          duration={500}
          className="hover:text-primaryBlue cursor-pointer"
        >
          Profile
        </Link>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          className="hover:text-primaryBlue cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="hover:text-primaryBlue cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-primaryBlue cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <Button variant="default" className="rounded-md">
        <a href={cv} download="CV Kenzie Taqiyassar">Download CV</a>
      </Button>
    </nav>
  );
};

export default Navbar;
