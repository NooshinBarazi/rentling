import React from 'react';
import style from './texticon.module.scss';

interface IProps {
  Icon: React.ReactNode;
  text: string;
  newStyle: string;
}

export const TextIcon = ({ Icon, text, newStyle }: IProps) => {
  return (
    <div className={newStyle || style.text_icon}>
      <span>{Icon}</span>
      <p>{text}</p>
    </div>
  );
};