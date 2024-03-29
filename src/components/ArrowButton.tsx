import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ArrowButton = ({
  direction,
  onClick,
  className = "",
}: {
  direction: string;
  onClick: () => void;
  className: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex p-[10px] text-black justify-center items-center bg-white rounded-full border-black border-2 ${className}`}
    >
      {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

export default ArrowButton;
