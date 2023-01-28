import React from 'react';
import style from './texticon.module.scss';

type Icons = 'call' | 'instagram'; 

const getIconFromName = (iconName: Icons) => {
  switch (iconName) {
    case 'call':
      return;
  }
};

const TextIcon = ({children,iconName}: {children: any; iconName: Icons;}) => {
const icon = getIconFromName(iconName);

  return (
    <div className={style.textIcon}>
      {icon}
      {children}
    </div>
  );
};

export default TextIcon;
