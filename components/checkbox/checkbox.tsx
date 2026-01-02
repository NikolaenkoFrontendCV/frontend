'use client'

import CheckIcon from '@/public/check-icon.svg';

export default function Checkbox({label, isCheck, onChange}: {label: string, isCheck?: boolean, onChange?: (isChecked: boolean) => void}) {
  function handleChange() {
    if (onChange) {
      onChange(!isCheck);
    }
  }

  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0"
      data-name="Filter-item"
      data-node-id="2109:858"
    >
      <input id={label + '-filter'} type="checkbox" className="hidden" onChange={handleChange} checked={isCheck} value={label}></input>
      <button
        className="block border border-[#a3a3a3] border-solid cursor-pointer relative rounded-[4px] shrink-0 size-[20px]"
        data-node-id="I2109:858;2109:818"
      >
        {
          isCheck && <CheckIcon />
        }
      </button>
      <label
        htmlFor={label + '-filter'}
        className="font-lato leading-[normal] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] tracking-[0.8px]"
        data-node-id="I2109:858;2109:793"
      >
        {label}
      </label>
    </div>
  )
}