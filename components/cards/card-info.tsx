export default function CardInfo({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${className || ""}`}>{children}</div>
  );
}
