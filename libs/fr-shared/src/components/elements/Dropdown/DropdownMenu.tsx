import React, { useState } from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.scss';
import { motion } from 'framer-motion';

interface DropdownProps {
  children?: any;
}

export const Dropdown = ({ children }: DropdownProps) => {
  return <div className={styles.dropdown_link_menu}>{children}</div>;
};

interface ChooseDropdownProps {
  style: any;
  label: string;
  selectedOption: string;
  options: string[];
  handleOptionChange: any;
  className?: any;
}

export const ChooseDropdown = ({
  label,
  selectedOption,
  options,
  style,
  handleOptionChange,
  className,
}: ChooseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={style}
      className={className || styles.dropdown}
      tabIndex={1}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.dropdown_label}>
        <p>{selectedOption || `${label}`}</p>
      </div>
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
