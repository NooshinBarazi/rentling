import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  Icon: React.ReactNode;
  text: string;
  newStyle: string;
  onClick: React.MouseEventHandler;
}

export const Button = ({ Icon, text, newStyle, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={newStyle || styles.primary_btn}>
      <p>{text}</p>
      <span>{Icon}</span>
    </button>
  );
};
