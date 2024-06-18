import { cn } from "../lib/utils";
import { LinkError } from "../types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactElement;
  error?: LinkError["type"] | null;
}
export default function InputWithIcon({ icon, error, ...delegated }: Props) {
  return (
    <div className="relative text-brand-gray-300">
      <input
        className={cn(
          `w-full rounded-lg border border-brand-gray-200 py-3 pl-11 pr-4 placeholder:text-current`,
          error && (error === "empty_url" ? "border-red-500" : "text-red-500"),
        )}
        {...delegated}
      />
      <span
        className={
          "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
        }
      >
        {icon}
      </span>
    </div>
  );
}
