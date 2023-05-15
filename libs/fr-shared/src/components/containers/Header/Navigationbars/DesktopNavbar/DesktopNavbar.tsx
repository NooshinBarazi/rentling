import { useState, useEffect } from 'react';
import styles from './DesktopNavbar.module.scss';
import Link from 'next/link';
import {
  LogoIcon,
  ProfileIcon,
  NavbarDrawer,
  Dropdown,
  useAuth,
} from '@rentling/fr-shared';

export const DesktopNavbar = () => {
  // checks if user is loggedin
  const { isLoggedIn, setLoggedIn } = useAuth();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

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

  useEffect(() => {
    if (dropdownIsOpen) {
      setProfileIsOpen(true);
    }
  });

  const LoggedInlinks = [
    { href: 'profile', label: 'Profile' },
    { href: 'profile/favorite-houses', label: 'Favorites' },
    { href: 'profile/messages', label: 'Notifications' },
    { href: 'profile/history', label: 'My houses' },
  ];

  const defaultLinks = [
    // { href: 'login', label: 'Login' },
    { href: 'signup', label: 'Signup' },
  ];
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  return (
    <header
      className={isScrolled ? styles.navbar_box_scrolled : styles.navbar_box}
    >
      <nav className={isScrolled ? styles.navbar_scrolled : styles.navbar}>
        <Link href={'/'}>
          <div
            className={
              isScrolled ? styles.navbar_icon_scrolled : styles.navbar_icon
            }
          >
            <LogoIcon />
          </div>
        </Link>

        <div className={styles.navbar_items}>
          <div
            onMouseEnter={() => setProfileIsOpen(true)}
            onMouseLeave={() => setProfileIsOpen(false)}
            className={
              dropdownIsOpen ? styles.dropdown_menu_open : styles.dropdown_menu
            }
            tabIndex={5}
            onBlur={() => (setDropDonwIsOpen(false), setProfileIsOpen(false))}
            onClick={() => (
              setDropDonwIsOpen(!dropdownIsOpen), setProfileIsOpen(false)
            )}
          >
            <div className={styles.profile_icon}>
              <ProfileIcon profileIsOpen={profileIsOpen} />
            </div>

            {dropdownIsOpen && (
              <Dropdown>
                {isLoggedIn ? (
                  <ul>
                    {LoggedInlinks.map((link) => (
                      <Link
                        onMouseDown={(event) => event.preventDefault()}
                        href={`/${link.href}`}
                      >
                        <li key={link.href}>{link.label}</li>
                      </Link>
                    ))}

                    <div className={styles.navbar_dropdown_line}></div>

                    <li> Switch to LandLord </li>
                    <div className={styles.navbar_dropdown_line}></div>
                    <Link href={'/help'}>
                      <li> Help </li>
                    </Link>
                    <li onClick={handleLogout}> Logout </li>
                  </ul>
                ) : (
                  <ul>
                    <li onClick={() => setLoggedIn(true)}>Login</li>
                    {defaultLinks.map((link) => (
                      <Link
                        key={link.href + link.label}
                        onMouseDown={(event) => event.preventDefault()}
                        href={`/${link.href}`}
                      >
                        <li key={link.href}>{link.label}</li>
                      </Link>
                    ))}
                    <div className={styles.navbar_dropdown_line}></div>
                    <li> Switch to LandLord </li>
                    <Link href={'/help'}>
                      <li> Help </li>
                    </Link>
                  </ul>
                )}
              </Dropdown>
            )}
          </div>
        </div>
      </nav>
      <section
        className={isOpen ? styles.navbar_drawer : styles.navbar_drawer_close}
      >
        <NavbarDrawer
          drawerIsOpen={() => setIsOpen(!isOpen)}
          drawerIsClose={() => setIsOpen(false)}
        />
      </section>
    </header>
  );
};
