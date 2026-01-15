export default function Section(props: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={"relative min-h-screen w-full".concat(" " + props.className)}
    >
      {props.children}
    </section>
  );
}
