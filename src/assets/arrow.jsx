import React from "react";

function Arrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 37 32"
      onClick={props.onClick}
    >
      <path
        fill="#666"
        d="M14.913.762L1.282 15.252a1.232 1.232 0 000 1.664l13.63 14.489c.432.46 1.13.46 1.561 0l.652-.695a1.232 1.232 0 000-1.665L6.477 17.748h28.63c.606 0 1.101-.529 1.101-1.175v-.98c0-.645-.495-1.174-1.101-1.174H6.477L17.116 3.121a1.232 1.232 0 000-1.664l-.652-.695a1.044 1.044 0 00-1.551 0z"
      ></path>
    </svg>
  );
}

export default Arrow;
