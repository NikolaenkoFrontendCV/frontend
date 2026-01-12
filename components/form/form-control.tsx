export default function FormControl({error, children} : {error?: boolean, children?: React.ReactNode}) {
  return (
    <div className="w-full flex flex-col gap-2.5 items-start">
      {children}
    </div>
  );
}