import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import MobileNavLogo from "../assets/images/logo-mobile-nav.svg";
import LogoSmall from "../assets/images/logo-small.svg";
import { cn } from "../lib/utils";
import { Link as IconLink, CircleUserRound, Eye } from "lucide-react";
import Button from "./Button";
import toast from "react-hot-toast";
import ToastMessage from "./ToastMessage";
export default function Navbar() {
  const { pathname } = useLocation();
  const isPreviewNav = pathname === "/preview";
  return isPreviewNav ? <PreviewNav /> : <MainNav />;
}

function MainNav() {
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

function PreviewNav() {
  const navigate = useNavigate();
  return (
    <nav className="flex gap-4 py-4 pl-6 pr-4 md:justify-between md:rounded-xl md:bg-white">
      <Button
        className="flex-1 md:w-fit md:flex-grow-0 md:px-6"
        variant="secondary"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Back to Editor
      </Button>
      <Button
        className="flex-1 md:w-fit md:flex-grow-0 md:px-6"
        variant="primary"
        onClick={() => {
          navigator.clipboard.writeText("https://alanjibarradev.gmail.com");
          toast(
            <ToastMessage
              message="The Link has been copied to clipboard!"
              icon={<IconLink size={16} />}
            />,
          );
        }}
      >
        Share Link
      </Button>
    </nav>
  );
}
