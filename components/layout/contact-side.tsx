import Image from "next/image";

export default function ContactSide() {
  return (
    <div
      className="fixed z-50 bg-[rgba(23,23,23,0.5)] border border-[#171717] border-solid content-stretch flex flex-col gap-[10px] items-start justify-center right-25 min-[1440px]:right-[calc(50%-620px)] p-[10px] rounded-[100px] top-[252px]"
      data-name="Platforms"
      data-node-id="2113:150"
    >
      <div
        className="content-stretch flex items-center overflow-clip relative shrink-0 size-[40px]"
        data-name="linkedin-svgrepo-com 1"
        data-node-id="2113:152"
      >
        <div
          className="flex-[1_0_0] h-full min-h-px min-w-px relative shrink-0"
          data-node-id="2113:153"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={"/linkedin-icon.svg"}
          />
        </div>
      </div>
      <div
        className="relative shrink-0 size-[40px]"
        data-name="image 2"
        data-node-id="2113:157"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={"/hh-icon.svg"}
        />
      </div>
      <div
        className="overflow-clip relative shrink-0 size-[40px]"
        data-name="telegram-svgrepo-com 1"
        data-node-id="2113:158"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={"/telegram-icon.svg"}
        />
      </div>
      <div
        className="content-stretch flex items-center overflow-clip relative rounded-[20px] shrink-0 size-[40px]"
        data-name="gmail-svgrepo-com 1"
        data-node-id="2113:164"
      >
        <div
          className="flex-[1_0_0] h-full min-h-px min-w-px relative shrink-0"
          data-node-id="2113:165"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={"/gmail-icon.svg"}
          />
        </div>
      </div>
    </div>
  );
}
