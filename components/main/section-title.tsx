export default function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div
      className="h-54.75 relative shrink-0 w-fit flex items-end"
      data-name="About-title"
      data-node-id="2109:196"
    >
      <div
        className="z-5 absolute flex flex-col items-center justify-center left-0 -translate-x-1/2 top-0"
        data-name="01"
        data-node-id="2109:185"
      >
        <div
          className="bg-clip-text bg-linear-to-b flex flex-col from-[#bdbdbd] justify-center leading-[0] relative shrink-0 text-[160px] to-[#171717] w-full"
          data-node-id="2109:168"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <span className=" leading-[219px] whitespace-pre-wrap font-manrope font-bold">
            {number}
          </span>
        </div>
      </div>
      <div
        className="z-10 flex flex-col font-manrope font-bold justify-center text-white text-[78px] top-[165.5px] whitespace-nowrap"
        data-node-id="2109:172"
      >
        <h2 className="leading-[normal]">{title}</h2>
      </div>
    </div>
  );
}
