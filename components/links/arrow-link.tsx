import Link from "next/link";
import ArrowRightIcon from "@/public/arrow-right-icon.svg";

export default function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex shrink-0 content-stretch items-center justify-center gap-1.5"
    >
      <div
        className="font-lato relative flex shrink-0 flex-col justify-center text-[16px] leading-0 whitespace-nowrap text-white not-italic"
        data-node-id="I2124:486;2117:215"
      >
        <p className="leading-[normal] underline decoration-solid [text-underline-position:from-font]">
          {children}
        </p>
      </div>
      <ArrowRightIcon />
    </Link>
  );
}
