export default function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`font-lato text-gray-white text-base font-normal ${className || ""}`}
    >
      {children}
    </p>
  );
}
