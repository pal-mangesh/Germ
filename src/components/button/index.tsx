import React, { ReactElement } from "react";

export interface ButtonProps {
  title: string;
  onClick?: any;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  title,
  onClick,
  size,
}: ButtonProps): ReactElement | null {
  const onClickHandler = (e: any) => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className="bg-pink-500 hover:bg-pink-400 text-white py-2 px-8 rounded-lg"
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
}
