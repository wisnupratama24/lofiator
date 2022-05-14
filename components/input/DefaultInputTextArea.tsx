import React, { HTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IPropsDefaultInputTextArea {
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

function DefaultInputTextArea({
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
}: IPropsDefaultInputTextArea) {
  return (
    <div className={styles.defaultInput}>
      <label htmlFor={id} className={classNameLabel} style={styleLabel}>
        {label}
      </label>
      <div>
        <textarea
          id={id}
          className={`${className}`}
          placeholder={placeholder}
          style={styleInput}
          {...props}></textarea>

        {showError && messageError && (
          <p className='text-red-600 py-1 text-xs'>{messageError}</p>
        )}
      </div>
    </div>
  );
}

export default DefaultInputTextArea;
