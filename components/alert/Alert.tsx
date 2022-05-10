import React from "react";

interface IPropsAlert {
  show: boolean;
  message: string;
  type: "danger" | "success";
}
function Alert({ show, message, type }: IPropsAlert) {
  return (
    <>
      {show && (
        <div
          className={`py-2 my-3 text-sm text-center rounded-md text-white ${
            type === "success" ? "bg-green-400" : "bg-red-400"
          }`}>
          {message}
        </div>
      )}
    </>
  );
}

export default Alert;
