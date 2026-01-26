// import LinkedInIcon from "@/public/linkedin-icon.svg";
import HhIcon from "@/public/hh-icon.svg";
import TelegramIcon from "@/public/telegram-icon.svg";
import GmailIcon from "@/public/gmail-icon.svg";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSide() {
  return (
    <motion.div
      animate={{ opacity: 1, transform: "translateX(0)" }}
      initial={{ opacity: 0, transform: "translateX(50%)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-63 right-25 max-[1200px]:right-15 max-[1024px]:right-10 max-[756px]:right-5 max:[640px]:right-2.5 z-50 flex flex-col content-stretch items-start justify-center gap-2.5 rounded-[100px] border border-solid border-[#171717] bg-[rgba(23,23,23,0.5)] p-2.5 min-[1440px]:right-[calc(50%-620px)]"
      data-name="Platforms"
      data-node-id="2113:150"
    >
      {/* <Link
        href={"#"}
        className="relative flex size-10 shrink-0 content-stretch items-center overflow-clip"
        data-name="linkedin-svgrepo-com 1"
        data-node-id="2113:152"
      >
        <div
          className="relative h-full min-h-px min-w-px flex-[1_0_0] shrink-0"
          data-node-id="2113:153"
        >
          <LinkedInIcon />
        </div>
      </Link> */}
      <Link
        href={"https://spb.hh.ru/resume/120d7bfbff0dc9442f0039ed1f346d3466766f"}
        className="relative size-10 shrink-0"
        data-name="image 2"
        data-node-id="2113:157"
      >
        <HhIcon />
      </Link>
      <Link
        href={"https://t.me/AliBabagg"}
        className="relative size-10 shrink-0 overflow-clip"
        data-name="telegram-svgrepo-com 1"
        data-node-id="2113:158"
      >
        <TelegramIcon />
      </Link>
      <Link
        href={"mailto:nikol.alex06@mail.ru"}
        className="relative flex size-10 shrink-0 content-stretch items-center overflow-clip rounded-[20px]"
        data-name="gmail-svgrepo-com 1"
        data-node-id="2113:164"
      >
        <div
          className="relative h-full min-h-px min-w-px flex-[1_0_0] shrink-0"
          data-node-id="2113:165"
        >
          <GmailIcon />
        </div>
      </Link>
    </motion.div>
  );
}
