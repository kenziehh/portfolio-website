const ContactCard = ({
  icon,
  name,
  alias,
  href,
}: {  
  icon: string | JSX.Element;
  name: string;
  alias: string;
  href: string;
}) => {
  return (
    <div className="flex items-start flex-col gap-4 shadow-md py-16 px-8 rounded-xl hover:scale-110 transition-all duration-300">
      <div className="flex gap-6 items-center">
        {typeof icon === "string" ? (
          <img src={icon} alt="" />
        ) : (
          <div>{icon}</div>
        )}
        <h3>{name}</h3>
      </div>

      <a target="_blank" href={href} className="text-primaryBlue">
        {alias}
      </a>
    </div>
  );
};

export default ContactCard;
