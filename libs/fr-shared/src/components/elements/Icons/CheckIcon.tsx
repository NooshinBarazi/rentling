import * as React from 'react';
import Link from 'next/link';

function MemoCheckIcon({ props }: any) {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0127 0C6.76269 0 0.0126953 6.75 0.0126953 15C0.0126953 23.25 6.76269 30 15.0127 30C23.2627 30 30.0127 23.25 30.0127 15C30.0127 6.75 23.2627 0 15.0127 0ZM12.0127 22.5L4.5127 15L6.6277 12.885L12.0127 18.255L23.3977 6.87L25.5127 9L12.0127 22.5Z"
        fill="#417D8A"
      />
    </svg>
  );
}

export const CheckIcon = React.memo(MemoCheckIcon);
