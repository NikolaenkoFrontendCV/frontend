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
      className="relative flex shrink-0 content-stretch items-center justify-center gap-[16px]"
      data-name="Filter-item"
      data-node-id="2109:858"
    >
      <input
        id={label + "-filter"}
        type="checkbox"
        className="hidden"
      ></input>
      <button
        className="relative block flex size-[20px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-solid border-[#a3a3a3]"
        data-node-id="I2109:858;2109:818"
        onClick={handleChange}
      >
        {isNotAll && <NotAllCheckIcon />}
        {isCheck && <CheckIcon />}
      </button>
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
