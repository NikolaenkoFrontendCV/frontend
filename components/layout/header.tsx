import NavigationLink from "../links/navigation-link";

export default function Header() {
  return (
    <header
      className="fixed z-50 w-full content-stretch bg-linear-to-b from-gray-900 to-gray-900/0 flex items-center justify-center left-0 overflow-clip px-[429px] py-[40px] top-0 w-[1440px]"
      data-name="Header"
      data-node-id="2109:173"
    >
      <nav
        className="content-stretch flex gap-[50px] items-center relative shrink-0"
        data-name="Navigation"
        data-node-id="2108:165"
      >
        <NavigationLink href="#about">About</NavigationLink>
        <NavigationLink href="#skills">Skills</NavigationLink>
        <NavigationLink href="#experience">Experience</NavigationLink>
        <NavigationLink href="#portfolio">Portfolio</NavigationLink>
        <NavigationLink href="#contacts">Contacts</NavigationLink>
      </nav>
    </header>
  );
}
