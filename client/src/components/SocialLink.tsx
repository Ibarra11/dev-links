import { Grip, Link } from "lucide-react";
import InputLabel from "./InputLabel";
import Input from "./Input";
import React from "react";
import PlatformSelect from "./Select";
import { InputError, Platforms } from "../types";
import { PLACEHOLDERS } from "../lib/constants";
import DraggableDroppableItem from "./DraggaleAndDroppableItem";
import { useLinks } from "./LinksProvider";

interface Props {
  linkNumber: number;
  selectedPlatform: Platforms;
  selectedPlatforms: Array<Platforms>;
  linkUrl: string;
}
export default function SocialLink({
  linkNumber,
  selectedPlatform,
  selectedPlatforms,
  linkUrl,
}: Props) {
  const id = React.useId();
  const {
    handleRemoveLink,
    handleUpdateLinkPlatform,
    handleUpdateLinkUrl,
    errors,
  } = useLinks();

  return (
    <DraggableDroppableItem position={linkNumber - 1} id={selectedPlatform}>
      <div className={`relative space-y-4 rounded-xl bg-brand-gray-100 p-5`}>
        <div>
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

            <Input
              type="text"
              id={`link-${id}`}
              placeholder={`e.g. ${PLACEHOLDERS[selectedPlatform]}`}
              icon={<Link size={16} />}
              value={linkUrl}
              onChange={(e) => {
                handleUpdateLinkUrl(selectedPlatform, e.target.value);
              }}
              error={
                errors &&
                errors[selectedPlatform] &&
                errors[selectedPlatform].type
              }
            />
          </div>
        </div>
      </div>
    </DraggableDroppableItem>
  );
}
