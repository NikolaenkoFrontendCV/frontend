export default function FormControl({
  error,
  children,
}: {
  error?: boolean;
  children?: React.ReactNode;
}) {
  console.log(error);
  return (
    <div className="flex w-full flex-col items-start gap-2.5">{children}</div>
  );
}
