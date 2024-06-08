interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactElement;
}
export default function InputWithIcon({ icon, ...delegated }: Props) {
  return (
    <div className="relative text-brand-gray-300">
      <input
        className="w-full rounded-lg border border-brand-gray-200 py-3 pl-11 pr-4 placeholder:text-current"
        {...delegated}
      />
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
        {icon}
      </span>
    </div>
  );
}
