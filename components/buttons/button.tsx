"use client";

import { ComponentProps } from "react";

export default function Button({
  style = "filled",
  children,
  ...props
}: ComponentProps<"button"> & { style?: "filled" | "outlined" }) {
  switch (style) {
    case "outlined":
      return (
        <button
          {...props}
          className="flex w-fit shrink-0 cursor-pointer content-stretch items-center justify-center rounded-[100px] border border-solid border-[#f5f5f5] px-5 py-2 disabled:cursor-alias disabled:border-gray-500"
        >
          <div
            className="font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-0 whitespace-nowrap text-[#f5f5f5] not-italic"
            data-node-id="I2109:223;2109:198"
          >
            <span className="leading-[99.91000366210938%]">{children}</span>
          </div>
        </button>
      );
    case "filled":
      return (
        <button
          {...props}
          className="flex w-fit shrink-0 cursor-pointer content-stretch items-center justify-center rounded-[100px] bg-white px-5 py-2 disabled:cursor-default disabled:bg-gray-500"
          data-node-id="2109:220"
        >
          <div
            className="font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-0 whitespace-nowrap text-gray-800 not-italic"
            data-node-id="I2109:220;2109:201"
          >
            <span className="leading-[99.91000366210938%]">{children}</span>
          </div>
        </button>
      );
  }
}

export function ButtonSet({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex shrink-0 content-stretch items-start gap-5"
      data-name="Contact-buttons"
    >
      {children}
    </div>
  );
}
