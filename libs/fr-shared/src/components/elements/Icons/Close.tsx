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
        d="M21.4168 2.05212L15.9064 7.56254L19.3335 11H11.0002V2.66671L14.4272 6.09379L19.9481 0.583374L21.4168 2.05212ZM2.05225 21.4167L7.56266 15.9063L11.0002 19.3334V11H2.66683L6.09391 14.4271L0.583496 19.948L2.05225 21.4167Z"
        fill="white"
      />
    </svg>
  );
};
