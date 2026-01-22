import React from "react";
import AnimationText from "../typography/animation-text";
import ShowMoreButton from "../buttons/show-more-button";
import { useAppDispatch } from "@/lib/hooks/redux-store";
import { setDialogContent } from "@/lib/features/dialog-conent/dialogContentSlice";

export default function ExperienceStep({
  id,
  position,
  company,
  period,
  reverse,
  children,
}: {
  id: number;
  position: string;
  company: string;
  period: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  function handleShowMore() {
    dispatch(setDialogContent({type: 'experience', itemId: id}));
  }

  return (
    <div
      className={`flex w-full shrink-0 content-stretch items-center justify-center gap-10 overflow-clip px-10 py-2.5 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <AnimationText
        direction={reverse ? "rightToLeft" : "leftToRight"}
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
      </AnimationText>
      <div className="aspect-square min-w-3 rounded-full bg-white"></div>
      <AnimationText
        direction={reverse ? "leftToRight" : "rightToLeft"}
        className="relative flex w-full flex-col content-stretch items-start justify-center gap-2.5"
        data-node-id="2117:195"
      >
        <div
          className="font-lato relative flex shrink-0 flex-col justify-center text-justify text-[16px] leading-normal whitespace-pre-wrap text-[#f5f5f5] not-italic"
          data-node-id="2117:174"
        >
          {children}
        </div>
        <ShowMoreButton
          className="relative flex shrink-0 content-stretch items-center justify-center gap-1.5 cursor-pointer"
          onClick={handleShowMore}
        />
      </AnimationText>
    </div>
  );
}
