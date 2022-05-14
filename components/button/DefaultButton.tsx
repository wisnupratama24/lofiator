import Link from "next/link";
import React from "react";

interface IPropsDefaultButton {
  label: string;
  outline?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  isLink?: boolean;
  href?: string;
  [key: string]: any;
}

function DefaultButton({
  label,
  outline = false,
  className,
  type = "button",
  disabled = false,
  isLink = false,
  href,
  ...props
}: IPropsDefaultButton) {
  const classNameOutline = outline
    ? "border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
    : "bg-green-500 text-white hover:bg-green-600";
  return (
    <>
      {isLink ? (
        <Link href={typeof href !== "undefined" ? href : ""}>
          <div
            className={`py-2 px-3 ease-in delay-75 rounded text-xs cursor-pointer transition-all ${
              disabled ? "bg-gray-400 text-white" : classNameOutline
            } ${className}`}>
            {label}
          </div>
        </Link>
      ) : (
        <button
          type={type}
          className={`py-2 px-3 ease-in delay-75 rounded text-xs cursor-pointer transition-all ${
            disabled ? "bg-gray-400 text-white" : classNameOutline
          } ${className}`}
          {...props}>
          {label}
        </button>
      )}
    </>
  );
}

export default DefaultButton;
