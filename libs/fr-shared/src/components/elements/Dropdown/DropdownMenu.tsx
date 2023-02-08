import React from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.scss';

interface LinkType {
  href: string;
  label: any;
}

export const Dropdown = ({ links }: any) => {
  return (
    <div className={styles.dropdown_menu}>
      <ul>
        {links.map((link: LinkType) => (
          <Link href={link.href}>
            <li key={link.href}>{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
