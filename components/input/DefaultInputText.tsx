import React, { HTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IPropsDefaultInputText {
  id: string;
  label: string;
  type?: string;
  className?: string;
  placeholder: string;
  classNameLabel?: string;
  styleLabel?: HTMLAttributes<HTMLLabelElement>;
  styleInput?: React.CSSProperties;
  showError?: boolean;
  messageError?: string;
  [key: string]: any;
}

function DefaultInputText({
  id,
  label,
  type = "text",
  className,
  classNameLabel,
  placeholder,
  styleLabel,
  styleInput,
  showError = false,
  messageError = "",
  ...props
}: IPropsDefaultInputText) {
  return (
    <div className={styles.defaultInput}>
      <label htmlFor={id} className={classNameLabel} style={styleLabel}>
        {label}
      </label>
      <div>
        <input
          type={type}
          id={id}
          className={`${className}`}
          placeholder={placeholder}
          style={styleInput}
          {...props}
        />

        {showError && messageError && (
          <p className='text-red-600 py-1 text-xs'>{messageError}</p>
        )}
      </div>
    </div>
  );
}

export default DefaultInputText;
