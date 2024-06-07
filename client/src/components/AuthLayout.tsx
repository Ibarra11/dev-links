import { Outlet } from "react-router-dom";
// import logo from "../assets/images/logo-large.svg";
export default function AuthLayout() {
  return (
    <div className="h-screen space-y-16 bg-white p-8">
      <div className="flex items-center gap-2">
        {/* <img alt="Devlinks" src={logo} /> */}
      </div>
      <h1 className="font-brand text-4xl">Testing</h1>
      <Outlet />
    </div>
  );
}
