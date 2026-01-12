"use client";

import { ComponentProps } from "react";

export default function Button({
  style = "filled",
  children,
  ...props
}: ComponentProps<"button"> & {style?: "filled" | "outlined"}) {
  switch (style) {
    case "outlined":
      return (
        <button
          {...props}
          className="w-fit flex shrink-0 content-stretch items-center justify-center rounded-[100px] border border-solid border-[#f5f5f5] px-[20px] py-[8px] disabled:border-gray-500 disabled:cursor-alias cursor-pointer"
        >
          <div
            className="font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-[0] whitespace-nowrap text-[#f5f5f5] not-italic"
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
          className="w-fit flex shrink-0 content-stretch items-center justify-center rounded-[100px] bg-white px-[20px] py-[8px] disabled:bg-gray-500 disabled:cursor-default cursor-pointer"
          data-node-id="2109:220"
        >
          <div
            className="font-lato relative flex shrink-0 flex-col justify-center text-[20px] leading-[0] whitespace-nowrap text-gray-800 not-italic"
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
      className="relative flex shrink-0 content-stretch items-start gap-[20px]"
      data-name="Contact-buttons"
    >
      {children}
    </div>
  );
}
