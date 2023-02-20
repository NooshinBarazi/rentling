import React from 'react';
import style from './texticon.module.scss';

<<<<<<< HEAD
type Icon = 'call' | 'instagram';

const getIconFromName = (iconName: Icon) => {
  switch (iconName) {
    case 'call':
      return;
  }
};

interface IProps {
  Icon: React.ReactNode;
  text: string;
}

export const TextIcon = ({ Icon, text }: IProps) => {
  // const icon = getIconFromName(iconName);

  return (
    <div className={style.textIcon}>
      {Icon}
      {text}
    </div>
  );
};
=======
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
>>>>>>> c869776faf3e3d92bdeb2d83e268a6409be0281c
