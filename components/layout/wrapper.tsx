import ContactSide from "./contact-side";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max:[640px]:px-2.5 relative mx-auto h-auto w-full max-w-325 max-[1440px]:mx-0 max-[1440px]:max-w-360 max-[1440px]:px-25 max-[1200px]:px-15 max-[1024px]:px-10 max-[756px]:px-5"
      data-name="Wrapper"
      data-node-id="2107:161"
    >
      <ContactSide />
      {children}
    </div>
  );
}
