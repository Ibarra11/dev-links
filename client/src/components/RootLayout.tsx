import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function RootLayout() {
  return (
    // add flex column on the lg viewport, so any pages that want to fill that space can do so.
    <div className="flex h-screen flex-col overflow-y-auto bg-brand-gray-100">
      <header className="relative z-10 rounded-xl md:px-6 md:pt-6">
        <Navbar />
      </header>
      <div className="flex-1 overflow-y-hidden p-4 md:overflow-y-visible md:p-6">
        <Outlet />
      </div>
    </div>
  );
}
