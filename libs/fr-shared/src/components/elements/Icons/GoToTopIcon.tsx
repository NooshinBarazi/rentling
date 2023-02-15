import * as React from 'react';

function MemoGoToTopIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 36" fill="none" {...props}>
      <path
        d="M7.833 15.667h5.875V35.25h3.917V15.667H23.5l-7.833-7.834-7.834 7.834zM0 0v3.917h31.333V0H0z"
        fill="#fff"
      />
    </svg>
  );
}

export const GoToTopIcon = React.memo(MemoGoToTopIcon);
