import { Outlet } from "react-router-dom";
import LogoLarge from "../assets/images/logo-large.svg";
export default function AuthLayout() {
  return (
    <div className="h-screen bg-brand-gray-100 p-8 md:flex md:items-center md:p-0">
      <div className="mx-auto w-full max-w-md space-y-16 md:space-y-12">
        <div className="md:flex md:justify-center">
          <img alt="Devlinks" src={LogoLarge} />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
