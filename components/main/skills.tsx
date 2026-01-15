/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { type Skill, skills, skillsTypes } from "../../data/skills";
import Fuse from "fuse.js";
import SearchIcon from "@/public/search-icon.svg";
import Checkbox from "../checkbox/checkbox";
import AnimationContainer from "../containers/animation-container";

const fuse = new Fuse(skills, {
  keys: [
    "name",
    {
      name: "shortDesctioption",
      weight: 2,
    },
  ],
});

export default function Skills() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string[]>(skillsTypes);

  function handleSearch(value: string) {
    setSearch(value);
  }

  function handleChangeFilter(value: string) {
    if (value === "All") {
      if (filter.length > 0) {
        setFilter([]);
        return;
      }
      setFilter(skillsTypes);
      return;
    }
    if (filter.includes(value)) {
      setFilter(filter.filter((item) => item !== value));
    } else {
      setFilter([...filter, value]);
    }
  }

  let result = skills;
  if (search != "") {
    result = fuse.search(search).map((res) => res.item);
  }
  if (filter.length < skillsTypes.length) {
    result = result.filter((skill) => filter.includes(skill.type));
  }

  return (
    <div
      className="relative flex w-full max-w-4xl shrink-0 flex-col content-stretch items-center gap-5"
      data-name="Skills-search"
      data-node-id="2109:875"
    >
      <AnimationContainer className="w-full">
        <input
          className="relative flex w-full shrink-0 content-stretch items-center justify-between overflow-clip rounded-[10px] border border-solid border-[#a3a3a3] px-5 py-3"
          data-name="search-input"
          data-node-id="2109:869"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <div
          className="absolute top-3 right-5 size-6 shrink-0"
          data-name="search"
          data-node-id="I2109:869;2109:866"
        >
          <SearchIcon />
        </div>
      </AnimationContainer>
      <AnimationContainer className="relative flex h-87.25 w-full shrink-0 content-stretch items-start justify-between">
        <div
          className="relative flex w-55.75 shrink-0 flex-col content-stretch items-start gap-5"
          data-name="Filter-items"
          data-node-id="2109:836"
        >
          <Checkbox
            label="All"
            onChange={handleChangeFilter}
            isCheck={filter.length === skillsTypes.length}
            isNotAll={filter.length !== skillsTypes.length && filter.length > 0}
          />
          {skillsTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              onChange={handleChangeFilter}
              isCheck={filter.includes(type)}
            />
          ))}
        </div>
        <div
          className="relative flex h-87.25 w-160 shrink-0 flex-col content-stretch items-start overflow-x-clip overflow-y-auto"
          data-name="Skills-list"
          data-node-id="2109:527"
        >
          {result.length !== 0 ? (
            result.map((skill) => <Skill key={skill.id} {...skill} />)
          ) : (
            <p
              className="relative mt-0 ml-0 text-[18px] tracking-[1.2px] text-white"
              data-node-id="2109:921"
            >
              No skills found
            </p>
          )}
        </div>
      </AnimationContainer>
    </div>
  );
}

function Skill(props: Skill) {
  const image = props.image.replace("@/public", "");

  return (
    <div
      className="relative flex w-full shrink-0 content-stretch items-center gap-6.75 overflow-clip border-t-0 border-r-0 border-b border-l-0 border-solid border-[#a3a3a3] px-4 py-3.75"
      data-name="Skill"
      data-node-id="2109:920"
    >
      <div
        className="relative size-10 shrink-0"
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
          <img alt="" className="block size-full max-w-none" src={image} />
        </div>
      </div>
      <div
        className="font-lato relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[normal] not-italic"
        data-node-id="I2109:920;2109:384"
      >
        <p
          className="relative col-1 row-1 mt-0 ml-0 text-[24px] tracking-[1.2px] text-white"
          data-node-id="I2109:920;2109:382"
        >
          {props.name}
        </p>
        <p
          className="relative col-1 row-1 mt-10.5 ml-0 text-[16px] tracking-[0.8px] text-[#d4d4d4]"
          data-node-id="I2109:920;2109:383"
        >
          {props.shortDescription}
        </p>
      </div>
    </div>
  );
}
