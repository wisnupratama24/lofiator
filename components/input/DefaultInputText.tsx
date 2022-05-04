import React from "react";
import styles from "./Input.module.scss";

interface IPropsDefaultInputText {
  id: string;
  label: string;
  type?: string;
  className?: string;
  placeholder: string;
}

function DefaultInputText({
  id,
  label,
  type = "text",
  className,
  placeholder,
}: IPropsDefaultInputText) {
  return (
    <div className={styles.defaultInput}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type={type}
          id={id}
          className={`${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default DefaultInputText;
