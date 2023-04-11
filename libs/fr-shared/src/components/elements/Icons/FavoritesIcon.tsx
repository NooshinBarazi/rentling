import * as React from 'react';

function MemoFavoritesIcon(props: any) {
  return (
    <svg
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1781 4.4673C21.2685 2.04496 24.4712 0.5 27.8082 0.5C33.7151 0.5 38.3562 5.09673 38.3562 10.9905C38.3562 18.1812 31.8356 24.0749 21.9589 32.9823L19.1781 35.5L16.3973 32.9823C6.52055 24.0749 0 18.1812 0 10.9905C0 5.09673 4.6411 0.5 10.5479 0.5C13.8849 0.5 17.0877 2.04496 19.1781 4.4673Z"
        fill="#417D8A"
      />
    </svg>
  );
}

export const FavoritesIcon = React.memo(MemoFavoritesIcon);
