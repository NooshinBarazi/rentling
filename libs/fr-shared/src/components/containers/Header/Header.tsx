import React from 'react';
import styles from './Header.module.scss';
interface HeaderProps {
  children: any;
}

export const Header = ({ children }: HeaderProps) => {
  return <div className={styles.header}>{children}</div>;
};
