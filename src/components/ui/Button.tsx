import type React from "react";

export default function Button(props: {
  handleClick: (message: string) => void;
  children: React.ReactNode;
  message: string;
}) {
  return (
    <>
      <button onClick={() => props.handleClick(props.message)}>
        {props.children}
      </button>
    </>
  );
}
