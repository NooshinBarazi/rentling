import React from 'react';
import styles from './button.module.scss';

interface IProps {
  Icon: React.ReactNode;
  text: string;
  //style: React.CSSProperties;
  onClick: React.MouseEventHandler;
}

export const Button = ({ Icon, text, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={styles.primaryBtn}>
      <p>{text}</p>
      <span>{Icon}</span>
    </button>
  );
};
