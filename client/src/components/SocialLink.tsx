import { Grip, Link } from "lucide-react";
import InputLabel from "./InputLabel";
import InputWithIcon from "./InputWithIcon";
import React from "react";
import PlatformSelect from "./Select";
interface Props {
  linkNumber: number;
  handleRemoveLink: (linkId: string) => void;
  linkId: string;
}
export default function SocialLink({
  linkId,
  linkNumber,
  handleRemoveLink,
}: Props) {
  const id = React.useId();
  return (
    <div className="space-y-3 rounded-xl bg-brand-gray-100 p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-brand-gray-300">
          <Grip size={16} />
          <p className="text-base font-bold">Link #{linkNumber}</p>
        </div>
        <button onClick={() => handleRemoveLink(linkId)} className="text-base">
          Remove
        </button>
      </div>
      <div className="relative space-y-1">
        <InputLabel htmlFor={`link-${id}`}>Platform</InputLabel>
        <PlatformSelect />
      </div>
      <div className="space-y-1">
        <InputLabel htmlFor={`link-${id}`}>Link</InputLabel>
        <InputWithIcon
          type="text"
          id={`link-${id}`}
          placeholder="e.g. https://www.github.com/johnappleseed"
          icon={<Link size={16} />}
        />
      </div>
    </div>
  );
}
