import * as React from "react";

function MenuIcon(props: any) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.724C0 10.772.689 10 1.538 10h46.923c.85 0 1.539.772 1.539 1.724s-.689 1.724-1.538 1.724H1.538c-.85 0-1.538-.772-1.538-1.724z"
        fill="#577291"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.539 20.345c0-.952.688-1.724 1.538-1.724h35.385c.85 0 1.538.772 1.538 1.724s-.689 1.724-1.538 1.724H13.077c-.85 0-1.538-.772-1.538-1.724z"
        fill="#DEC8B4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 28.965c0-.952.689-1.724 1.538-1.724h46.923c.85 0 1.539.772 1.539 1.724 0 .953-.689 1.725-1.538 1.725H1.538C.688 30.69 0 29.918 0 28.965zM26.923 37.586c0-.952.689-1.724 1.539-1.724h20c.85 0 1.538.772 1.538 1.724s-.689 1.724-1.538 1.724h-20c-.85 0-1.539-.772-1.539-1.724z"
        fill="#577291"
      />
    </svg>
  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
