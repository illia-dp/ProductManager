import { ButtonProps } from "./Button.types";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  style = "confirm",
  className,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center text-center font-medium text-base leading-6 tracking-tight transition-all duration-250 ease-in-out rounded-full",
        style === "confirm" && "bg-button text-white hover:bg-button-hover",
        style === "more" &&
          "border border-gray-light bg-transparent text-main hover:border-button-hover",
        className && className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
