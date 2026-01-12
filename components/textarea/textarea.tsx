import { ComponentProps } from "react";

export default function Textarea({ ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`min-h-20.5 w-full shrink-0 rounded-[10px] border border-solid border-[#a3a3a3] px-5 py-2.5 placeholder:leading-normal ${props.className}`}
      {...props}
    />
  );
}
