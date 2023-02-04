import * as React from "react";

function LikeFilledIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 28" fill="none" {...props}>
      <path
        d="M15.286 3.989C16.89 2.12 19.347.929 21.907.929 26.44.928 30 4.473 30 9.02c0 5.547-5.003 10.094-12.58 16.965l-2.134 1.942-2.133-1.942C5.575 19.115.573 14.568.573 9.021c0-4.547 3.56-8.093 8.092-8.093 2.56 0 5.017 1.192 6.621 3.06z"
        fill="#F76969"
      />
    </svg>
  );
}

const MemoLikeFilledIcon = React.memo(LikeFilledIcon);
export default MemoLikeFilledIcon;
