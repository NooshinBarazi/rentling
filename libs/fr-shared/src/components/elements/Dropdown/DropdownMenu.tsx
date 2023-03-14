import React, { useState } from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.scss';
import { motion } from 'framer-motion';
interface LinkType {
  href: string;
  label: any;
}

export const Dropdown = ({ links }: any) => {
  return (
    <div className={styles.dropdown_link_menu}>
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

interface DropdownProps {
  style: any;
  label: string;
  selectedOption: string;
  options: string[];
  handleOptionChange: any;
  className: any;
}

export const ChooseDropdown = ({
  label,
  selectedOption,
  options,
  style,
  handleOptionChange,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={style}
      className={className || styles.dropdown}
      tabIndex={1}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>{selectedOption || `${label}`}</div>
      <motion.ul
        animate={
          isOpen
            ? {
                height: '',
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }
            : {
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.1,
                },
              }
        }
        className={styles.dropdown_list}
      >
        {options.map((option) => (
          <li
            key={option}
            className={styles.option}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
