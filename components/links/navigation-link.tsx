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
      className="relative flex shrink-0 content-stretch items-center justify-center"
      data-node-id="2108:152"
    >
      <div
        className="relative flex shrink-0 flex-col justify-center text-[16px] whitespace-nowrap text-[#f5f5f5]"
        data-node-id="I2108:152;2107:144"
      >
        <span className="leading-5">{children}</span>
      </div>
    </Link>
  );
}
