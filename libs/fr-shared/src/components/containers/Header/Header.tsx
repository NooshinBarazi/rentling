import React from 'react';
import styles from './Header.module.scss';
interface HeaderProps {
  children: any;
}

export const Header = ({ children }: HeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
