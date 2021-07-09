import NavLink from "@/ui/navlink";
import Logo from "@/ui/logo";

export default function Nav() {
  return (
    <nav className="flex container mx-auto px-1 md:px-5 py-5 md:py-10 z-10 relative">
      <div>
        <a href="/">
          <Logo height={30} />
        </a>
      </div>
      <div className="flex flex-grow align-middle justify-end">
        <ul className="flex align-bottom">
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/about">About</NavLink>
          </li>
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/contribute">Contribute</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
