import React from "react";
import ShowMoreLink from "../links/show-more-link";

export default function ExperienceStep({
  position,
  company,
  period,
  reverse,
  children,
}: {
  position: string;
  company: string;
  period: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex w-full shrink-0 content-stretch items-center justify-center gap-[40px] overflow-clip px-10 py-2.5 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`flex min-h-px w-full min-w-px flex-col content-stretch ${reverse ? "items-start" : "items-end"} justify-center`}
        data-node-id="2117:169"
      >
        <div
          className="flex shrink-0 flex-col content-stretch items-center justify-center gap-2.5 leading-0 whitespace-nowrap not-italic"
          data-node-id="2117:170"
        >
          <div
            className="flex shrink-0 flex-col justify-center font-['Lato:Bold',sans-serif] text-[20px] text-[#f5f5f5]"
            data-node-id="2117:171"
          >
            <p className="leading-[normal]">{position}</p>
          </div>
          <div
            className="font-lato relative flex shrink-0 flex-col justify-center text-[16px] text-[#a3a3a3]"
            data-node-id="2117:172"
          >
            <p className="leading-[normal]">
              {company}, {period}
            </p>
          </div>
        </div>
      </div>
      <div className="aspect-square min-w-3 rounded-full bg-white"></div>
      <div
        className="relative flex w-full flex-col content-stretch items-start justify-center gap-2.5"
        data-node-id="2117:195"
      >
        <div
          className="font-lato relative flex shrink-0 flex-col justify-center text-justify text-[16px] leading-[1.5] whitespace-pre-wrap text-[#f5f5f5] not-italic"
          data-node-id="2117:174"
        >
          {children}
        </div>
        <ShowMoreLink
          className="relative flex shrink-0 content-stretch items-center justify-center gap-[6px]"
          href="#"
        />
      </div>
    </div>
  );
}
