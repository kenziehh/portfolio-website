import Button from "./Button";


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
        <p className="hover:text-primaryBlue cursor-pointer">Profile</p>
        <p className="hover:text-primaryBlue cursor-pointer">Skills</p>
        <p className="hover:text-primaryBlue cursor-pointer">Portfolio</p>
        <p className="hover:text-primaryBlue cursor-pointer">Contact</p>
      </div>
      <Button variant="default" onClick={handleDownload} className="rounded-md">
        Download CV
      </Button>
      
    </nav>
  );
};

export default Navbar;
