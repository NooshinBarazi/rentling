import React from 'react';
import styles from './Main.module.scss';
interface MainProps {
  children: any;
}

export const Main = ({ children }: MainProps) => {
  return <div>{children}</div>;
};
