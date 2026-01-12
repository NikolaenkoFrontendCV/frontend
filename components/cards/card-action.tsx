export default function CardAction({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex h-fit items-start gap-2.5 ${className || ""}`}>
      {children}
    </div>
  );
}
