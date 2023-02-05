import * as React from "react";

function UserSigninIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 31 30" fill="none" {...props}>
      <path
        d="M16.344 24.474c0-3.158 1.737-6 4.263-7.421-2.052-.79-4.579-1.264-7.42-1.264-6.948 0-12.632 2.843-12.632 6.316v3.158h15.79v-.79zm8.684-5.527c-3 0-5.526 2.527-5.526 5.527S22.028 30 25.028 30s5.527-2.526 5.527-5.526-2.527-5.527-5.527-5.527zM19.502 6.316c0 3.473-2.842 6.316-6.316 6.316-3.473 0-6.316-2.843-6.316-6.316C6.87 2.842 9.713 0 13.186 0c3.474 0 6.316 2.842 6.316 6.316z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoUserSigninIcon = React.memo(UserSigninIcon);
export default MemoUserSigninIcon;
