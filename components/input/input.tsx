import React, { ComponentProps } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Input({ ...props }: ComponentProps<"input">) {
  return <input {...props} className={`w-full shrink-0 rounded-[10px] text-white border border-solid border-[#a3a3a3] px-5 py-2.5 ${props.className}`} autoComplete="on" />;
}