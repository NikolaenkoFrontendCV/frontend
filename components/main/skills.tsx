'use client'

import { useState } from "react"
import { type Skill, skills, skillsTypes } from "../../data/skills";
import Fuse from "fuse.js";
import SearchIcon from '@/public/search-icon.svg';
import Checkbox from "../checkbox/checkbox";

const fuse = new Fuse(skills, {
  keys: [
    'name',
    {
      name: 'shortDesctioption',
      weight: 2
    }
  ]
})

export default function Skills() {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState(skillsTypes);

  function handleSearch() {
    
  }

  let result = skills;
  if (search != '') {
    result = fuse.search(search).map(res => res.item);
  }
  console.log(result);
  return (
    <div
      className="content-stretch flex flex-col gap-5 items-center relative shrink-0 w-full"
      data-name="Skills-search"
      data-node-id="2109:875"
    >
      <div
        className="border border-[#a3a3a3] border-solid content-stretch flex items-center justify-between overflow-clip px-[20px] py-[12px] relative rounded-[10px] shrink-0 w-full"
        data-name="search-input"
        data-node-id="2109:869"
      >
        <p
          className="font-lato leading-[normal] not-italic relative shrink-0 text-[#a3a3a3] text-[16px] tracking-[0.8px]"
          data-node-id="I2109:869;2109:864"
        >
          Input...
        </p>
        <div
          className="relative shrink-0 size-[24px]"
          data-name="search"
          data-node-id="I2109:869;2109:866"
        >
          <SearchIcon />
        </div>
      </div>
      <div
        className="content-stretch flex h-[349px] items-start justify-between relative shrink-0 w-full"
        data-name="Filter"
        data-node-id="2109:862"
      >
        <div
          className="content-stretch flex flex-col gap-5 items-start relative shrink-0 w-[223px]"
          data-name="Filter-items"
          data-node-id="2109:836"
        >
          <Checkbox label="All" />
          <Checkbox label="Languages" />
          <Checkbox label="Layout" />
          <Checkbox label="Frameworks" />
          <Checkbox label="State managers" />
          <Checkbox label="Version control" />
          <Checkbox label="UI libraries" />
          <Checkbox label="Deploy" />
          <Checkbox label="Other" />
        </div>
        <div
          className="content-stretch flex flex-col h-[349px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[640px]"
          data-name="Skills-list"
          data-node-id="2109:527"
        >
          {
            result.map(skill => <Skill key={skill.id} {...skill}/>)
          }
        </div>
      </div>
    </div>
  )
}

function Skill(props: Skill) {
  const image = props.image.replace('@/public', '');

  return (
    <div
      className="border-[#a3a3a3] border-b border-l-0 border-r-0 border-solid border-t-0 content-stretch flex gap-[27px] items-center overflow-clip px-[16px] py-[15px] relative shrink-0 w-full"
      data-name="Skill"
      data-node-id="2109:920"
    >
      <div
        className="relative shrink-0 size-10"
        data-name="next-js-svgrepo-com 1"
        data-node-id="I2109:920;2109:439"
      >
        <div
          className="absolute inset-0"
          style={
            {
              "--fill-0": "rgba(255, 255, 255, 1)",
            } as React.CSSProperties
          }
        >
          {/* {import(props.image)} */}
          <img
            alt=""
            className="block max-w-none size-full"
            src={image}
          />
        </div>
      </div>
      <div
        className="font-lato grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[normal] not-italic relative shrink-0"
        data-node-id="I2109:920;2109:384"
      >
        <p
          className="col-1 ml-0 mt-0 relative row-1 text-[24px] text-white tracking-[1.2px]"
          data-node-id="I2109:920;2109:382"
        >
          {props.name}
        </p>
        <p
          className="col-1 ml-0 mt-10.5 relative row-1 text-[#d4d4d4] text-[16px] tracking-[0.8px]"
          data-node-id="I2109:920;2109:383"
        >
          {props.shortDescription}
        </p>
      </div>
    </div>
  )
}