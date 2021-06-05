import React, { ReactElement } from "react";

export interface HeadingProps {
  children?: any;
  position?: "start" | "center" | "end";
}

export default function Heading(props: HeadingProps): ReactElement | null {
  return (
    <>
      {props.children}
      <div
        className={`w-full flex justify-${props.position || "start"} `}
        style={{ borderBottom: "1px solid #CCC" }}
      >
        <div className={`h-1 w-1/3 bg-pink-500`} />
      </div>
    </>
  );
}
