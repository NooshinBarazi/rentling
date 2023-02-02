import React from 'react';
import styles from './Footer.module.scss';
interface FooterProps {
  children: any;
}

const Footer = ({ children }: FooterProps) => {
  return <div>{children}</div>;
};

export default Footer;
