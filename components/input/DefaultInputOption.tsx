import React, { HTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface IPropsDefaultInputOption {
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
  data: {
    label: string;
    value: string;
  }[];
  [key: string]: any;
}

function DefaultInputOption({
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
  data,
  ...props
}: IPropsDefaultInputOption) {
  return (
    <div className={styles.defaultInput}>
      <label htmlFor={id} className={classNameLabel} style={styleLabel}>
        {label}
      </label>
      <div>
        <select
          id={id}
          className={`${className}`}
          placeholder={placeholder}
          style={styleInput}
          {...props}>
          {data.map((item, index) => {
            return (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            );
          })}
        </select>

        {showError && messageError && (
          <p className='text-red-600 py-1 text-xs'>{messageError}</p>
        )}
      </div>
    </div>
  );
}

export default DefaultInputOption;
