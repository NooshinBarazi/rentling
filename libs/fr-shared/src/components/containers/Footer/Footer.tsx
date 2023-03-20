import React from 'react';
import styles from './Footer.module.scss';
interface FooterProps {
  children: any;
}

export const Footer = ({ children }: FooterProps) => {
  return <footer>{children}</footer>;
};
