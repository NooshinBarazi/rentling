import * as React from 'react';

function MemoSecurityIcon(props: any) {
  return (
    <svg
      width="28"
      height="36"
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 35.5C9.94583 34.4792 6.59925 32.1528 3.96025 28.521C1.32008 24.8903 0 20.8583 0 16.425V5.75L14 0.5L28 5.75V16.425C28 20.8583 26.6805 24.8903 24.0415 28.521C21.4013 32.1528 18.0542 34.4792 14 35.5Z"
        fill="#417D8A"
      />
    </svg>
  );
}

export const SecurityIcon = React.memo(MemoSecurityIcon);
