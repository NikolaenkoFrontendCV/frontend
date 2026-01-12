export default function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      className="font-lato text-[16px] leading-normal whitespace-nowrap text-[#f5f5f5] not-italic"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
