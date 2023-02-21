import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./Select.module.scss";

type Props = {
  options: {
    text: string;
    value: string | number | null;
  }[];
  label: any; // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType>
  register: any; // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
  required: boolean;
  onChange: ({ filter, value }) => void;

  style: Object;
};
export const Select: FC<Props> = ({
  options,
  label,
  register,
  required,
  onChange,

  style,
}) => (
  <select
    {...register(label, (required = required))}
    onChange={(e) =>
      onChange({
        filter: label,
        value: e.target.value,
      })
    }
    name={label}
    id={label}
    className={styles.select}
    style={{
      ...style,
    }}
  >
    {options.map(({ value, text }, index) => (
      <option value={value} key={index}>
        {text}
      </option>
    ))}
  </select>
);
