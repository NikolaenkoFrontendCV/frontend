export default function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={`font-manrope text-2xl font-bold text-white ${className || ""}`}
    >
      {children}
    </h3>
  );
}
