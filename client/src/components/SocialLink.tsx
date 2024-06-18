import { Grip, Link } from "lucide-react";
import InputLabel from "./InputLabel";
import InputWithIcon from "./InputWithIcon";
import React from "react";
import PlatformSelect from "./Select";
import { LinkError, Platforms } from "../types";
import { PLACEHOLDERS } from "../lib/constants";

interface Props {
  linkNumber: number;
  handleRemoveLink: (platform: Platforms) => void;
  selectedPlatform: Platforms;
  selectedPlatforms: Array<Platforms>;
  handleUpdateLinkPlatform: (
    prevPlatform: Platforms,
    nextLink: Platforms,
  ) => void;
  handleUpdateLinkUrl: (platform: Platforms, url: string) => void;
  errors: Record<Platforms, LinkError> | null;
}
export default function SocialLink({
  linkNumber,
  handleRemoveLink,
  selectedPlatform,
  selectedPlatforms,
  handleUpdateLinkPlatform,
  handleUpdateLinkUrl,
  errors,
}: Props) {
  const id = React.useId();
  console.log(selectedPlatform);
  console.log(errors && errors[selectedPlatform]);
  return (
    <div className="space-y-4 rounded-xl bg-brand-gray-100 p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-brand-gray-300">
          <Grip size={16} />
          <p className="text-base font-bold">Link #{linkNumber}</p>
        </div>
        <button
          onClick={() => handleRemoveLink(selectedPlatform)}
          className="text-base"
        >
          Remove
        </button>
      </div>
      <div className="relative space-y-1">
        <InputLabel htmlFor={`link-${id}`}>Platform</InputLabel>
        <PlatformSelect
          selectedPlatform={selectedPlatform}
          selectedPlatforms={selectedPlatforms}
          handleUpdateLinkPlatform={handleUpdateLinkPlatform}
        />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <InputLabel htmlFor={`link-${id}`}>Link</InputLabel>
          {errors && errors[selectedPlatform] && (
            <p className="text-sm text-red-500">
              {errors[selectedPlatform].type === "empty_url"
                ? "can't be empty"
                : "Please check the URL"}
            </p>
          )}
        </div>
        <InputWithIcon
          type="text"
          id={`link-${id}`}
          placeholder={`e.g. ${PLACEHOLDERS[selectedPlatform]}`}
          icon={<Link size={16} />}
          onChange={(e) =>
            handleUpdateLinkUrl(selectedPlatform, e.target.value)
          }
          error={
            errors && errors[selectedPlatform] && errors[selectedPlatform].type
          }
        />
      </div>
    </div>
  );
}
