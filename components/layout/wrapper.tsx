import ContactSide from "./contact-side";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto h-auto w-full max-w-310 max-[1440px]:mx-0 max-[1440px]:max-w-360 max-[1440px]:px-25"
      data-name="Wrapper"
      data-node-id="2107:161"
    >
      <ContactSide />
      {children}
    </div>
  );
}
