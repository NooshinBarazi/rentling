import React from 'react';
import style from './texticon.module.scss';

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

export const TextIcon = ({Icon, text}: IProps) => {
// const icon = getIconFromName(iconName);

  return (
    <div className={style.textIcon}>
      {Icon}
      {text}
    </div>
  );
};
