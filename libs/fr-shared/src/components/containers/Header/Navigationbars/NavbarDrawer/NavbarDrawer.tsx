import React from 'react';
import Link from 'next/link';
import styles from './NavbarDrawer.module.scss';
import { MenuIcon } from '@rentling/fr-shared';
interface LinkType {
  href: string;
  label: any;
}

interface NavbarDrawerProps {
  drawerIsOpen: any;
  drawerIsClose: any;
}

export const NavbarDrawer = ({
  drawerIsOpen,
  drawerIsClose,
}: NavbarDrawerProps) => {
  const links: LinkType[] = [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/Landlords', label: '10 things Landlords should read' },
    { href: '/RentalDeals', label: `What's the Best Rental Deals` },
    { href: '/Articles', label: 'Articles' },
  ];
  return (
    <div className={styles.navbar_drawer} tabIndex={3} onBlur={drawerIsClose}>
      <ul>
        {links.map((link: LinkType) => (
          <Link
            onMouseDown={(event) => event.preventDefault()}
            key={link.href + link.label}
            href={link.href}
          >
            <li key={link.href}>{link.label}</li>
          </Link>
        ))}
      </ul>
      <div className={styles.pages_toggle} onClick={drawerIsOpen}>
        <MenuIcon />
      </div>
    </div>
  );
};
