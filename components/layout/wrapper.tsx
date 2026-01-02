import ContactSide from "./contact-side";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-310 mx-auto w-full relative h-auto max-[1440px]:mx-0 max-[1440px]:px-25"
      data-name="Wrapper"
      data-node-id="2107:161"
    >
      {/* <ContactSide /> */}
      {children}
    </div>
  );
}
