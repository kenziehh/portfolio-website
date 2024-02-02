const PortfolioCard = ({
  name,
  link,
  children,
}: {
  name: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-96 flex flex-col gap-2 py-20 px-8 shadow-xl rounded-xl">
      <h3>{name}</h3>
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/kenziehh/CareerHub"
          className="text-primaryBlue"
          target="_blank" 
        >
          {link}
        </a>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PortfolioCard;
