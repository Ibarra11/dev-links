import { cn } from "../lib/utils";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
}

export default function InputLabel({
  htmlFor,
  className,
  children,
  ...delegated
}: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-base text-brand-gray-300", className)}
      {...delegated}
    >
      {children}
    </label>
  );
}
