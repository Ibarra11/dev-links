import { Link, NavLink } from "react-router-dom";
import MobileNavLogo from "../assets/images/logo-mobile-nav.svg";
import LogoSmall from "../assets/images/logo-small.svg";
import { cn } from "../lib/utils";
import { Link as IconLink, CircleUserRound, Eye } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white py-4 pl-6 pr-4 md:rounded-xl">
      <Link to="/">
        <img src={MobileNavLogo} className="block size-8 md:hidden" />
        <img src={LogoSmall} className="hidden md:block" />
      </Link>
      <div className="flex lg:gap-4">
        <NavLink
          to="/links"
          className={({ isActive }) =>
            cn(
              "flex h-10 items-center justify-center rounded-lg px-4 text-brand-gray-300 md:h-12 md:gap-1 md:px-6",
              isActive && "bg-brand-purple-100 text-brand-purple-300",
            )
          }
        >
          <IconLink size={20} />
          <span className="hidden text-base md:inline-block">Links</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            cn(
              "flex h-10 items-center justify-center rounded-lg px-4 text-brand-gray-300 md:h-12 md:gap-1 md:px-6",
              isActive && "bg-brand-purple-100 text-brand-purple-300",
            )
          }
        >
          <CircleUserRound size={20} />
          <span className="hidden text-base md:inline-block">
            Profile Details
          </span>
        </NavLink>
      </div>
      <Link
        to="/preview"
        className="flex h-10 items-center justify-center rounded-lg border border-brand-purple-300 px-4 text-brand-purple-300 md:h-12 md:px-6"
      >
        <Eye className="md:hidden" size={20} />
        <span className="hidden text-base md:inline-block">Preview</span>
      </Link>
    </nav>
  );
}
