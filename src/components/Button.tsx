import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "disabled" | "ghost" | "default";
  size?: "default" | "small" | "large";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  rounded = "md",
  className = "",
  ...rest
}: ButtonProps) => {
  const getVariantStyles = (): string => {
    switch (variant) {
      case "primary":
        return "border-primaryBlue text-primaryBlue";
      case "disabled":
        return "border-0 text-primaryBlue bg-[#E3E9F7]";
      case "ghost":
        return "hover:bg-accent hover:text-foreground border-none ";
      default:
        return "bg-primaryBlue text-white";
    }
  };

  const getSizeStyles = (): string => {
    switch (size) {
      case "small":
        return "px-3 py-2 text-sm";
      case "large":
        return "px-6 py-4 text-lg";
      default:
        return "px-4 py-3";
    }
  };

  const getRoundedStyles = (): string => {
    switch (rounded) {
      case "none":
        return "rounded-none";
      case "sm":
        return "rounded-sm";
      case "md":
        return "rounded-md";
      case "lg":
        return "rounded-lg";
      case "xl":
        return "rounded-xl";
      case "full":
        return "rounded-full";
      default:
        return "rounded-md";
    }
  };

  const baseStyles: string =
    "flex justify-center items-center text-center gap-2 font-medium border-2 transition-all duration-300 focus:outline-none flex-shrink-0";

  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${getRoundedStyles()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
