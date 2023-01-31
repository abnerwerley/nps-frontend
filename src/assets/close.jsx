import React from "react";

function Close(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 30 30"
      onClick={props.onClick}
    >
      <path
        stroke="#666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.917"
        d="M3.186 2.375L29.792 28.98"
      ></path>
      <path
        stroke="#666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.917"
        d="M2.375 28.98L28.98 2.375"
      ></path>
    </svg>
  );
}

export default Close;