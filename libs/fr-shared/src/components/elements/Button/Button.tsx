import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  Icon?: React.ReactNode;
  text: string;
  newStyle?: string;
  onClick: React.MouseEventHandler;
  ref?: any;
}

export const Button = ({ ref, Icon, text, newStyle, onClick }: IProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={newStyle || styles.primaryBtn}
    >
      <p>{text}</p>
      <span>{Icon}</span>
    </button>
  );
};
