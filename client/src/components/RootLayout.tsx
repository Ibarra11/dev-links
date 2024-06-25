import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import { Toaster, resolveValue } from "react-hot-toast";
import LinksProvider from "./UserProfileProvider";
export default function RootLayout() {
  return (
    // add flex column on the lg viewport, so any pages that want to fill that space can do so.
    <div className="relative flex h-screen flex-col overflow-y-auto bg-brand-gray-100">
      <header className="relative z-10 rounded-xl md:px-6 md:pt-6">
        <Navbar />
      </header>
      <div className="flex-1 overflow-y-hidden p-4 md:p-6 md:pb-20">
        <LinksProvider>
          <Outlet />
        </LinksProvider>
      </div>

      <Toaster>
        {(t) => {
          return (
            <div
              className={`absolute left-0 right-4 top-4 flex justify-end ${t.visible ? "animate-toast-enter" : "animate-toast-exit"}`}
              id="toast-container"
            >
              {resolveValue(t.message, t)}
            </div>
          );
        }}
      </Toaster>
    </div>
  );
}

// <Toaster>

// </Toaster>;
