import * as React from 'react';

function MemoHouseTickIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 44 44" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.649 41.35V17.57L22 2.98l19.351 14.59v23.78H2.649zm40.824-25.5L22.798.26A1.368 1.368 0 0022 0c-.281 0-.563.09-.797.26L.528 15.85A1.34 1.34 0 000 16.91v25.77C0 43.41.595 44 1.325 44h41.351c.73 0 1.324-.59 1.324-1.32V16.91c0-.41-.197-.81-.527-1.06z"
        fill="#EDD4BE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.221 19.27l-9.379 10.45-5.212-4.96-1.888 1.98 7.253 6.91L31.258 21.1l-2.037-1.83z"
        fill="#EDD4BE"
      />
    </svg>
  );
}

export const HouseTickIcon = React.memo(MemoHouseTickIcon);
