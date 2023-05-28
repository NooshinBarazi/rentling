import React from 'react';

interface FooterProps {
  children: any;
}

export const Footer = ({ children }: FooterProps) => {
  return <footer>{children}</footer>;
};
