import * as React from 'react';

function MemoSqFeetIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 22" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5.5h-4v4h4v-4zM0 0v5h5V0H0zM21.5.5h-4v4h4v-4zM17 0v5h5V0h-5zM21.5 17.5h-4v4h4v-4zM17 17v5h5v-5h-5zM4.5 17.5h-4v4h4v-4zM0 17v5h5v-5H0zM17 2.75H5v-.5h12v.5zM2.25 17V5h.5v12h-.5zm17 0V5h.5v12h-.5zM17 19.75H5v-.5h12v.5z"
        fill="#BFC4CC"
      />
    </svg>
  );
}

export const SqFeetIcon = React.memo(MemoSqFeetIcon);
