"use client";

import CheckIcon from "@/public/check-icon.svg";

export default function FormCheckbox({
  name,
  isCheck,
  onChange,
  children,
}: {
  name: string;
  children: React.ReactNode;
  isCheck?: boolean;
  onChange?: (isChecked: boolean) => void;
}) {
  function handleChange() {
    if (onChange) {
      onChange(!isCheck);
    }
  }

  return (
    <div
      className="flex shrink-0 content-stretch items-center justify-center gap-4"
      data-name="Filter-item"
      data-node-id="2109:858"
    >
      <div
        className="relative flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-solid border-[#a3a3a3]"
        data-node-id="I2109:858;2109:818"
        onClick={handleChange}
      >
        <input
          id={name}
          onChange={handleChange}
          type="checkbox"
          className="absolute h-full w-full opacity-0"
        ></input>
        {isCheck && <CheckIcon />}
      </div>
      <label
        htmlFor={name}
        className="font-lato relative text-[16px] leading-[normal] tracking-[0.8px] text-[#f5f5f5] not-italic"
        data-node-id="I2109:858;2109:793"
      >
        {children}
      </label>
    </div>
  );
}
