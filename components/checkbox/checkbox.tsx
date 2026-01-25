"use client";

import CheckIcon from "@/public/check-icon.svg";
import NotAllCheckIcon from "@/public/not-all-check-icon.svg";

export default function Checkbox({
  label,
  isNotAll,
  isCheck,
  onChange,
}: {
  label: string;
  isNotAll?: boolean;
  isCheck?: boolean;
  onChange?: (isChecked: string) => void;
}) {
  function handleChange() {
    if (onChange) {
      onChange(label);
    }
  }

  return (
    <div
      className="relative flex shrink-0 content-stretch items-center justify-center gap-4"
      data-name="Filter-item"
      data-node-id="2109:858"
    >
      <div className="relative flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-solid border-[#a3a3a3]">
        <input
          id={label + "-filter"}
          onChange={handleChange}
          type="checkbox"
          className="absolute h-full w-full cursor-pointer opacity-0"
        ></input>
        {isNotAll && <NotAllCheckIcon />}
        {isCheck && <CheckIcon />}
      </div>
      <label
        htmlFor={label + "-filter"}
        className="font-lato relative shrink-0 text-[16px] leading-[normal] tracking-[0.8px] text-[#f5f5f5] not-italic"
        data-node-id="I2109:858;2109:793"
      >
        {label}
      </label>
    </div>
  );
}
