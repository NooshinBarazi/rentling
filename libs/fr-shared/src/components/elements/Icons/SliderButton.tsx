import * as React from 'react';

function MemoSlidebarButton(props: any) {
  return (
    <svg
      width="56"
      height="145"
      viewBox="0 0 56 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.1699 74.4562C1.46529 73.4321 1.46529 72.0795 2.16989 71.0554L48.4485 3.78995C50.4064 0.944136 54.8316 3.11715 53.7768 6.40645L32.7938 71.8397C32.6027 72.4355 32.6027 73.0761 32.7938 73.6719L53.7768 139.105C54.8316 142.395 50.4064 144.568 48.4485 141.722L2.1699 74.4562Z"
        fill="#fff"
        stroke="#EDD4BE"
        strokeWidth="3"
      />
    </svg>
  );
}

export const SlidebarButton = React.memo(MemoSlidebarButton);
