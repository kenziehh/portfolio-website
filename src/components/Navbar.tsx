import Button from "./Button";
import { Link } from "react-scroll";

const Navbar = () => {
  const handleDownload = () => {
    const fileName = "CV Kenzie Taqiyassar.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = "../assets/CV-Kenzie-Taqiyassar.pdf";
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <nav className="fixed bg-white flex justify-between items-center container py-4">
      <h3>Kenziehh</h3>
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
      <Button variant="default" onClick={handleDownload} className="rounded-md">
        Download CV
      </Button>
    </nav>
  );
};

export default Navbar;
