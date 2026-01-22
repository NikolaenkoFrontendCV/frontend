import NavigationLink from "../links/navigation-link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 z-50 flex w-full content-stretch items-center justify-center bg-linear-to-b from-gray-900 to-gray-900/0 py-10"
      data-name="Header"
      data-node-id="2109:173"
    >
      <nav
        className="relative flex shrink-0 content-stretch items-center gap-12.5"
        data-name="Navigation"
        data-node-id="2108:165"
      >
        <NavigationLink href="/#about">About</NavigationLink>
        <NavigationLink href="/#skills">Skills</NavigationLink>
        <NavigationLink href="/#experience">Experience</NavigationLink>
        <NavigationLink href="/#portfolio">Portfolio</NavigationLink>
        <NavigationLink href="/#contacts">Contacts</NavigationLink>
      </nav>
    </header>
  );
}
