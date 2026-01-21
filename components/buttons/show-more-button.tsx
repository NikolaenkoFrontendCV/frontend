"use client";

export default function ShowMoreLink({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={className}>
      <div
        className="font-lato relative flex shrink-0 flex-col justify-center text-[16px] leading-0 whitespace-nowrap text-[#a3a3a3] not-italic"
        data-node-id="2117:215"
      >
        <p className="leading-[normal] underline decoration-solid [text-underline-position:from-font]">
          Show more
        </p>
      </div>
    </button>
  );
}
