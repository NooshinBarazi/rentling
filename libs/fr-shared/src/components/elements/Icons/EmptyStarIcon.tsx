import * as React from 'react';

function MemoEmptyStarIcon(props: any) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63915 19.6699L7.06559 13.5033L7.13343 13.21L6.90598 13.0128L2.12139 8.86469L8.44461 8.31579L8.74467 8.28975L8.86192 8.01232L11.318 2.20098L13.7741 8.01232L13.8914 8.28975L14.1915 8.31579L20.5147 8.86469L15.7301 13.0128L15.5026 13.21L15.5705 13.5033L16.9969 19.6699L11.5763 16.4L11.318 16.2442L11.0598 16.4L5.63915 19.6699Z"
        fill="white"
        stroke="#EDD4BE"
      />
    </svg>
  );
}

export const EmptyStarIcon = React.memo(MemoEmptyStarIcon);
