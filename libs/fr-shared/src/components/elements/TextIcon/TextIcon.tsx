import React from 'react';
import style from './texticon.module.scss';

interface IProps {
  Icon: React.ReactNode;
  title: string;
  text: string;
  newStyle: string;
}

export const TextIcon = ({ Icon,title, text, newStyle }: IProps) => {
  return (
    <div className={newStyle || style.text_icon}>
      <div className={style.text_header}>
      <span>{Icon}</span>
      <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};
