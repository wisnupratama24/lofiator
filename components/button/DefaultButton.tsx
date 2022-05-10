import React from "react";

interface IPropsDefaultButton {
  label: string;
  outline?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

function DefaultButton({
  label,
  outline = false,
  className,
  type = "button",
  disabled = false,
}: IPropsDefaultButton) {
  const classNameOutline = outline
    ? "border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
    : "bg-green-500 text-white hover:bg-green-600";
  return (
    <button
      type={type}
      className={`py-2 px-3 ease-in delay-75 rounded text-xs cursor-pointer transition-all ${
        disabled ? "bg-gray-400 text-white" : classNameOutline
      } ${className}`}>
      {label}
    </button>
  );
}

export default DefaultButton;
