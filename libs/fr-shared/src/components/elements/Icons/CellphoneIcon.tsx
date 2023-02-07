import * as React from 'react';

function MemoCellphoneIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 44 44" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.982 3.67v1.16h-21.5V3.67c0-.65.536-1.19 1.195-1.19h19.106a1.2 1.2 0 011.199 1.19zm-21.5 28.61h21.5V7.31h-21.5v24.97zm21.5 2.48v5.56c0 .66-.538 1.2-1.199 1.2H12.677a1.2 1.2 0 01-1.195-1.2v-5.56h21.5zM31.783 0H12.677A3.68 3.68 0 009 3.67v36.65C9 42.35 10.649 44 12.677 44h19.106a3.682 3.682 0 003.677-3.68V3.67A3.68 3.68 0 0031.783 0z"
        fill="#EDD4BE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.236 38.14c0-1.11-.9-2.01-2.006-2.01-1.108 0-2.006.9-2.006 2.01 0 1.11.898 2.01 2.006 2.01 1.107 0 2.006-.9 2.006-2.01z"
        fill="#EDD4BE"
      />
    </svg>
  );
}

export const CellphoneIcon = React.memo(MemoCellphoneIcon);
