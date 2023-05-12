import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  options: IOption[];
  defaultValue?: string;
}

export const SelectInput = ({ name, register, options, defaultValue }: IProps) => {
  return (
    <select {...register(name)} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
