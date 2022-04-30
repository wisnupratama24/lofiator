import React from "react";

interface IPropsDefaultButton {
  label: string;
  outline?: boolean;
}

function DefaultButton({ label, outline = false }: IPropsDefaultButton) {
  const classNameOutline = outline
    ? "border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
    : "bg-green-500 text-white hover:bg-green-600";
  return (
    <button
      type='button'
      className={`py-2 px-3 ease-in delay-75 rounded text-xs cursor-pointer transition-all ${classNameOutline}`}>
      {label}
    </button>
  );
}

export default DefaultButton;
