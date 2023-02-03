import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  Icon: React.ReactNode;
  name: string;
  type: string;
  id: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
}

export const Input = ({Icon, name, type, id, required, register,}: IProps) => {
  return (
    <>
      <div>{Icon}</div>
      <input
        {...register(name, {required})}
        name={name}
        type={type}
        id={id}
      />
    </>
  );
};