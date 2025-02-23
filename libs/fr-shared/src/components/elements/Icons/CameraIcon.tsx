import * as React from 'react';

function MemoCameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 44 44" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.427 37.33h-.05c0 .89-.346 1.68-.94 2.28-.594.59-1.386.94-2.277.94H5.841c-.89 0-1.682-.35-2.276-.94a3.197 3.197 0 01-.941-2.28V11.5c0-.89.347-1.69.941-2.28a3.193 3.193 0 012.276-.94h7.402c.742 0 1.335-.59 1.335-1.34V5.51c0-.55.199-1.04.545-1.39.347-.34.841-.54 1.386-.54h11.033c.544 0 1.039.2 1.386.54.347.35.544.84.544 1.39v1.43c0 .75.595 1.34 1.337 1.34h7.4c.892 0 1.684.35 2.278.94.593.59.94 1.39.94 2.28v25.83zm.841-29.94c-1.039-1.09-2.475-1.73-4.108-1.73h-6.064v-.1c0-1.24-.495-2.43-1.337-3.22A4.536 4.536 0 0027.542 1H16.459c-1.287 0-2.424.5-3.266 1.34a4.526 4.526 0 00-1.337 3.22v.1H5.841c-1.633 0-3.068.64-4.107 1.73C.694 8.43 0 9.91 0 11.5v25.83c0 1.63.644 3.07 1.734 4.11 1.039 1.04 2.524 1.73 4.107 1.73h32.858c1.632 0 2.53-.64 3.569-1.73C43.308 40.4 44 38.92 44 37.33V11.5c0-1.64-.642-3.07-1.732-4.11z"
        fill="#EDD4BE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.667 10.79a1.994 1.994 0 110 3.99 1.995 1.995 0 110-3.99zM21.969 13.86c-5.795 0-10.493 4.7-10.493 10.49 0 5.8 4.698 10.49 10.493 10.49 5.796 0 10.493-4.69 10.493-10.49 0-5.79-4.697-10.49-10.493-10.49zm0 2.42c4.45 0 8.069 3.62 8.069 8.07s-3.62 8.07-8.07 8.07c-4.448 0-8.069-3.62-8.069-8.07s3.62-8.07 8.07-8.07z"
        fill="#EDD4BE"
      />
    </svg>
  );
}

export const CameraIcon = React.memo(MemoCameraIcon);
