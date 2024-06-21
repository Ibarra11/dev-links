import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function ToastMessage({
  message,
  icon,
}: {
  message: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-gray-900 px-4 py-2 text-white md:px-6 md:py-4">
      <div className="flex items-center gap-2">
        <span className="shrink-0 md:inline">{icon}</span>
        <span className="text-sm md:text-base">{message}</span>
      </div>
      <button className="h-full px-2" onClick={() => toast.dismiss()}>
        <X size={16} />
      </button>
    </div>
  );
}
