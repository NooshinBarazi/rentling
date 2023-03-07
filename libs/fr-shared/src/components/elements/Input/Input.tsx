import React from 'react';
import styles from './Input.module.scss';
import {RegisterOptions,UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  Icon: React.ReactNode;
  name: string;
  type: string;
  id: string;
  validation: any;
  placeholder: string;
  error:any
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}

export const Input = ({Icon, name, type, id, validation, placeholder,error, register,}: IProps) => {
  return (
    <>
    <div className={styles.input}>
      <div className={styles.input_icon}>{Icon}</div>
      <input
        {...register(name, validation)}

        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.input_text}
      />
    </div>
      <span className={styles.error_msg}>{error}</span>
    </>
  );
};
