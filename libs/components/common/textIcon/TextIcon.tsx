import React from 'react';
//import style from './texticon.module.scss';


interface IProps {
  Icon: React.ReactNode;
  text: string;
}

export const TextIcon = ({Icon, text}: IProps) => {

  return (
    <div>
      {Icon}
      {text}
    </div>
  );
};
