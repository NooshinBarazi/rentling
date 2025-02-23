import * as React from 'react';

function MemoPrimaryButtonIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" {...props}>
      <path
        d="M27.629 25.778h-.5v10.485c0 .822-.675 1.497-1.497 1.497H19.64a1.503 1.503 0 01-1.497-1.497V21.784h-3.895a.494.494 0 01-.328-.862h0l.004-.004L30.617 5.882s0 0 0 0a1.512 1.512 0 012.009 0s0 0 0 0l16.694 15.036h0l.01.008a.49.49 0 01-.334.858h-3.895v14.48c0 .821-.675 1.496-1.497 1.496h-5.991a1.503 1.503 0 01-1.497-1.497V25.778h-8.488zm-5.126-1.78h-3V30.246h6.25v-6.25h-3.25z"
        stroke="#BFC4CC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.437 33.647l-.705-.607-.607-.705a12.155 12.155 0 01-2.768-9.986v-.003c.878-5.188 5.224-9.345 10.447-9.98h.006A12.164 12.164 0 0133.406 25.96v.003l-.001.004c-.634 5.223-4.791 9.568-9.98 10.446h-.003a12.154 12.154 0 01-9.985-2.767zm.153-13.1l7.45-6.702A10.573 10.573 0 0010.76 24.428c0 4.554 2.86 8.426 6.885 9.924V22.284h-3.395c-.919 0-1.338-1.138-.66-1.737zm14.039 5.731h4.14c-.479 2.73-2 5.096-4.14 6.674v-6.674zm-7.625-1.78h2.25v2.25h-2.25v-2.25zm2.25 3h-2.25v2.249h2.25v-2.25zm.75 0h2.25v2.249h-2.25v-2.25zm2.25-3h-2.25v2.25h2.25v-2.25z"
        fill="#fff"
      />
      <path
        d="M12.316 34.226L1.89 44.651c-.43.43-1.14.43-1.569 0-.43-.43-.43-1.14 0-1.57l.003-.002L10.723 32.63h1.593v1.595z"
        fill="#fff"
      />
    </svg>
  );
}

export const PrimaryButtonIcon = React.memo(MemoPrimaryButtonIcon);
