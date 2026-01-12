import Link from "next/link";
import NavigationLink from "../links/navigation-link";

export default function Footer() {
  return (
    <>
      <div className="pointer-events-none sticky bottom-0 z-100 h-30 w-full bg-linear-to-t from-gray-900 to-gray-900/0"></div>
      <footer
        className="w-full overflow-clip border-t border-r-0 border-b-0 border-l-0 border-solid border-[#a3a3a3] py-12.5"
        data-name="Footer"
        data-node-id="2124:601"
      >
        <div
          className="mx-auto flex w-full max-w-202 content-stretch items-center justify-between"
          data-name="Inner"
          data-node-id="2133:449"
        >
          <div
            className="relative flex shrink-0 flex-col content-stretch items-start"
            data-name="Navigation"
            data-node-id="2133:441"
          >
            <div
              className="relative flex shrink-0 flex-col content-stretch items-start justify-center gap-2.5"
              data-node-id="2133:428"
            >
              <NavigationLink href="/#about">About</NavigationLink>
              <NavigationLink href="/#skills">Skills</NavigationLink>
              <NavigationLink href="/#experience">Experience</NavigationLink>
              <NavigationLink href="/#portfolio">Portfolio</NavigationLink>
              <NavigationLink href="/#contacts">Contacts</NavigationLink>
            </div>
          </div>
          <div
            className="relative flex shrink-0 flex-col content-stretch items-start gap-2.5 font-['Inter:Regular',sans-serif] text-[16px] leading-0 font-normal text-[#d4d4d4] not-italic"
            data-name="Contacts"
            data-node-id="2133:446"
          >
            <div
              className="relative flex w-min min-w-full shrink-0 flex-col justify-center"
              data-node-id="2133:442"
            >
              <p className="leading-normal whitespace-pre-wrap text-[#d4d4d4]">
                <span>{`Phone: `}</span>
                <Link
                  href={"tel:89218121099"}
                  className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                >
                  +7 (921) 812 10 99
                </Link>
              </p>
            </div>
            <div
              className="relative flex w-min min-w-full shrink-0 flex-col justify-center"
              data-node-id="2133:444"
            >
              <p className="leading-normal whitespace-pre-wrap text-[#d4d4d4]">
                <span>{`Email: `}</span>
                <Link
                  href={"mailto:nikol.alex06@mail.ru"}
                  className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                >
                  nikol.alex06@mail.ru
                </Link>
              </p>
            </div>
            <div
              className="relative flex w-min min-w-full shrink-0 flex-col justify-center"
              data-node-id="2133:445"
            >
              <p className="leading-normal whitespace-pre-wrap text-[#d4d4d4]">
                <span>{`Telegram: `}</span>
                <Link
                  href={"https://t.me/AliBabagg"}
                  className="underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                >
                  @AliBabagg
                </Link>
              </p>
            </div>
            <div
              className="relative flex shrink-0 flex-col justify-center whitespace-nowrap"
              data-node-id="2133:447"
            >
              <Link href={"#"} className="leading-normal">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
