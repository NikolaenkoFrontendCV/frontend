import { ComponentProps } from "react";

export default function Textarea({
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`w-full shrink-0 rounded-[10px] min-h-20.5 border border-solid border-[#a3a3a3] px-5 py-2.5 placeholder:leading-normal ${props.className}`}
      {...props}
    />
  );
}