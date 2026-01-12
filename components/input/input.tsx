import { ComponentProps } from "react";

export default function Input({ ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={`w-full shrink-0 rounded-[10px] border border-solid border-[#a3a3a3] px-5 py-2.5 text-white ${props.className}`}
      autoComplete="on"
    />
  );
}
