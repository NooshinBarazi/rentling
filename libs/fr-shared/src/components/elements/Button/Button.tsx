import React from 'react';

interface IProps {
  Icon: React.ReactNode;
  text: string;
  style: React.CSSProperties;
  onClick: React.MouseEventHandler;
}

export const Button = ({Icon, text, style, onClick}: IProps) => {

  return (
    <button style={style} onClick={onClick}>
      {Icon}
      {text}
    </button>
  );
};