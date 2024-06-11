import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function RootLayout() {
  return (
    // add flex column on the lg viewport, so any pages that want to fill that space can do so.
    <div className="h-screen bg-brand-gray-100 lg:flex lg:flex-col">
      <div className="rounded-xl md:px-6 md:pt-6">
        <Navbar />
      </div>
      <div className="p-4 md:p-6 lg:flex-1">
        <Outlet />
      </div>
    </div>
  );
}
