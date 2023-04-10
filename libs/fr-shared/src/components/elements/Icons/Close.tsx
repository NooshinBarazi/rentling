import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Close = () => {
  const [isHover, setIsHovered] = useState(false);

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4168 2.052L15.9064 7.56242L19.3335 10.9999H11.0002V2.66659L14.4272 6.09367L19.9481 0.583252L21.4168 2.052ZM2.05225 21.4166L7.56266 15.9062L11.0002 19.3333V10.9999H2.66683L6.09391 14.427L0.583496 19.9478L2.05225 21.4166Z"
        fill="white"
      />
    </svg>
  );
};
