import React from 'react';
import styles from './Main.module.scss';
interface MainProps {
  children: any;
}

const Main = ({ children }: MainProps) => {
  return <div>{children}</div>;
};

export default Main;
