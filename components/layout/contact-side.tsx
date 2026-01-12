import LinkedInIcon from "@/public/linkedin-icon.svg";
import HhIcon from "@/public/hh-icon.svg";
import TelegramIcon from "@/public/telegram-icon.svg";
import GmailIcon from "@/public/gmail-icon.svg";

export default function ContactSide() {
  return (
    <div
      className="fixed top-[252px] right-25 z-50 flex flex-col content-stretch items-start justify-center gap-[10px] rounded-[100px] border border-solid border-[#171717] bg-[rgba(23,23,23,0.5)] p-[10px] min-[1440px]:right-[calc(50%-620px)]"
      data-name="Platforms"
      data-node-id="2113:150"
    >
      <div
        className="relative flex size-[40px] shrink-0 content-stretch items-center overflow-clip"
        data-name="linkedin-svgrepo-com 1"
        data-node-id="2113:152"
      >
        <div
          className="relative h-full min-h-px min-w-px flex-[1_0_0] shrink-0"
          data-node-id="2113:153"
        >
          <LinkedInIcon />
        </div>
      </div>
      <div
        className="relative size-[40px] shrink-0"
        data-name="image 2"
        data-node-id="2113:157"
      >
        <HhIcon />
      </div>
      <div
        className="relative size-[40px] shrink-0 overflow-clip"
        data-name="telegram-svgrepo-com 1"
        data-node-id="2113:158"
      >
        <TelegramIcon />
      </div>
      <div
        className="relative flex size-[40px] shrink-0 content-stretch items-center overflow-clip rounded-[20px]"
        data-name="gmail-svgrepo-com 1"
        data-node-id="2113:164"
      >
        <div
          className="relative h-full min-h-px min-w-px flex-[1_0_0] shrink-0"
          data-node-id="2113:165"
        >
          <GmailIcon />
        </div>
      </div>
    </div>
  );
}
