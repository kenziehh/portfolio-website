const SkillCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="shadow-md rounded-xl flex gap-4 items-center py-2.5 px-1">
      <img src={img} alt={img} className="w-10 h-10 rounded-full ml-2" />
      <h5 className="">{name}</h5>
    </div>
  );
};


export default SkillCard;
