import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return <aside>{children}</aside>;
};

export default Sidebar;
