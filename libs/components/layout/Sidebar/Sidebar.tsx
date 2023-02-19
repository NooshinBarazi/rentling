import React from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  children: any;
}

const Sidebar = ({ children }: SidebarProps) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
