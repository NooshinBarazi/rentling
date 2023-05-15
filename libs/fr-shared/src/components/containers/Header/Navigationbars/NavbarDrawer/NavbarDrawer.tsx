import React from 'react';
import Link from 'next/link';
import styles from './NavbarDrawer.module.scss';
interface LinkType {
  href: string;
  label: any;
}

export const NavbarDrawer = () => {

  const links: LinkType[] = [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/landlords', label: '10 things Landlords should read' },
    { href: '/rentalDeals', label: `What's the Best Rental Deals` },
    { href: '/articles', label: 'Articles' },
  ];
  return (
    <div className={styles.navbar_drawer}>
      <ul>
        {links.map((link: LinkType) => (
          <Link key={link.href + link.label} href={link.href}>
            <li key={link.href}>{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
