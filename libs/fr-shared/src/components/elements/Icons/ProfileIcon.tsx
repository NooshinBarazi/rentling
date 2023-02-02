import * as React from 'react';

function ProfileIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.113 35.77c9.745-1.079 16.092-.981 25.79.022a3.738 3.738 0 012.077 6.527c-5.719 4.985-10.481 7.7-15.321 7.68-4.854-.017-9.406-2.778-14.708-7.697a3.772 3.772 0 01-1.201-2.765 3.785 3.785 0 013.363-3.767z"
        fill="#577291"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 47.5c12.426 0 22.5-10.074 22.5-22.5S37.426 2.5 25 2.5 2.5 12.574 2.5 25 12.574 47.5 25 47.5zm0 2.5c13.807 0 25-11.193 25-25C50 11.192 38.807 0 25 0S0 11.192 0 25c0 13.807 11.193 25 25 25z"
        fill="#577291"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.357 30.714a9.643 9.643 0 100-19.286 9.643 9.643 0 000 19.286z"
        fill="#577291"
      />
    </svg>
  );
}

const MemoProfileIcon = React.memo(ProfileIcon);
export default MemoProfileIcon;
