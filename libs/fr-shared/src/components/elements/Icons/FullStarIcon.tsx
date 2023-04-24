import * as React from 'react';

function MemoFullStarIcon(props: any) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.38574 20.7083L6.07845 13.3906L0.401367 8.46871L7.90137 7.81767L10.818 0.916626L13.7347 7.81767L21.2347 8.46871L15.5576 13.3906L17.2503 20.7083L10.818 16.8281L4.38574 20.7083Z"
        fill="#EDD4BE"
      />
    </svg>
  );
}

export const FullStarIcon = React.memo(MemoFullStarIcon);
