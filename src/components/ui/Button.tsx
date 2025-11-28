import type React from "react";

export default function Button(props: {
  handleClick: (message: string) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => props.handleClick("클릭했다")}>
        {props.children}
      </button>
    </>
  );
}
