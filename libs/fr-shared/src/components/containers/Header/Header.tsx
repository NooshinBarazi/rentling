import React from 'react';
import styles from './Header.module.scss';
interface HeaderProps {
  children: any;
}

const Header = ({ children }: HeaderProps) => {
  return <div>{children}</div>;
};

export default Header;
