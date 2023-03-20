import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  options: IOption[];
}

export const SelectInput = ({ name, register, options }: IProps) => {
  return (
    <select {...register(name)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
