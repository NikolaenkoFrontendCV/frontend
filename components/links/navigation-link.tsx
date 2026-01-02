import Link from "next/link";

export default function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="Обо мне"
      data-node-id="2108:152"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap"
        data-node-id="I2108:152;2107:144"
      >
        <span className="leading-5">{children}</span>
      </div>
    </Link>
  );
}
