export default function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-full flex-col justify-between gap-2.5 p-2.5 ${className || ""}`}
    >
      {children}
    </div>
  );
}
