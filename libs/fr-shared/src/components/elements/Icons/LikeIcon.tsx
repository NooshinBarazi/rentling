import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function MemoLikeIcon(props: any) {
  const [isFull, setIsFull] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFull(!isFull)}
      width="1em"
      height="1em"
      viewBox="0 0 30 28"
      animate={{
        fill: isFull ? '#F76969' : '#F7696900',
      }}
      transition={{
        duration: 0,
        ease: 'easeInOut',
      }}
      {...props}
    >
      <motion.path
        initial={{ pathLength: 1, pathOffset: 1 }}
        animate={
          isHovered
            ? { pathLength: 1, pathOffset: 2, stroke: '#F76969' }
            : isFull
            ? { pathLength: 1, pathOffset: 2, stroke: '#F76969' }
            : { pathLength: 2, pathOffset: 0, stroke: '#CDD9DC' }
        }
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        d="M14.527 4.212l.76.884.758-.884c1.42-1.656 3.604-2.712 5.862-2.712C25.888 1.5 29 4.6 29 8.593c0 2.444-1.094 4.748-3.223 7.353-2.14 2.618-5.22 5.417-9.03 8.871v.001l-1.46 1.33-1.461-1.33-.002-.001c-3.808-3.454-6.889-6.253-9.029-8.871-2.13-2.605-3.223-4.909-3.223-7.353C1.572 4.6 4.684 1.5 8.665 1.5c2.258 0 4.442 1.056 5.862 2.712z"
        strokeWidth={2}
      />
    </motion.svg>
  );
}

export const LikeIcon = React.memo(MemoLikeIcon);
