import React, { useState, useEffect } from 'react';
import styles from './DesktopNavbar.module.scss';
import Link from 'next/link';
import {
  LogoIcon,
  ProfileIcon,
  NavbarDrawer,
  MenuIcon,
  Dropdown,
} from '@rentling/fr-shared';

interface LinkType {
  href: string;
  label: string;
}

export const DesktopNavbar = () => {
  // checks the Menu Icon state to Open / Close the Navbar drawer
  const [isOpen, setIsOpen] = useState(false);
  // checks the page on scroll, to animate the Logo + Navbar box shadow
  const [isScrolled, setIsScrolled] = useState(false);
  // checks the dropdown state
  const [dropdownIsOpen, setDropDonwIsOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 0 ? true : false);

      return () => (window.onscroll = null);
    };
  }, []);

  const links: LinkType[] = [
    { href: '/profile', label: 'User Profile' },
    { href: '/profile/favorite', label: 'Favorites' },
    { href: '/profile/notifications', label: 'Notifications' },
    { href: '/profile/history', label: 'My houses' },
    { href: '/profile/a', label: 'My properties' },
  ];

  return (
    <header
      className={isScrolled ? styles.navbar_box_scrolled : styles.navbar_box}
    >
      <nav className={isScrolled ? styles.navbar_scrolled : styles.navbar}>
        <div
          className={
            isScrolled ? styles.navbar_icon_scrolled : styles.navbar_icon
          }
        >
          <LogoIcon href={'/'} />
        </div>
        <div className={styles.navbar_items}>
          <Link href="/">
            <button
              style={isScrolled ? { display: 'none' } : { display: 'block' }}
            >
              <p>I'm a Landlord</p>
            </button>
          </Link>
          <div
            className={
              dropdownIsOpen ? styles.dropdown_menu_open : styles.dropdown_menu
            }
            tabIndex={1}
            onBlur={() => setDropDonwIsOpen(false)}
            onClick={() => setDropDonwIsOpen(!dropdownIsOpen)}
          >
            <p>Profile</p>
            <div className={styles.profile_icon}>
              <ProfileIcon />
            </div>
            <Dropdown links={links} />
          </div>
          <MenuIcon onClick={() => setIsOpen(!isOpen)} />
        </div>
      </nav>
      <section
        className={isOpen ? styles.navbar_drawer : styles.navbar_drawer_close}
      >
        <NavbarDrawer />
      </section>
    </header>
  );
};
