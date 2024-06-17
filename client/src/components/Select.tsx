import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { PLATFORMS } from "../lib/constants";
import React from "react";
import { SocialIcon } from "./SocialIcon";
import { cn } from "../lib/utils";
interface Props {
  selectedPlatform: (typeof PLATFORMS)[number];
  selectedPlatforms: Array<(typeof PLATFORMS)[number]>;
  handleUpdateLink: (
    linkId: string,
    nextLink: (typeof PLATFORMS)[number],
  ) => void;
  linkId: string;
}

export default function PlatformSelect({
  selectedPlatforms,
  handleUpdateLink,
  linkId,
  ...props
}: Props) {
  const [selectedPlatform, setSelectedPlatform] = React.useState<
    (typeof PLATFORMS)[number]
  >(props.selectedPlatform);
  return (
    <Select.Root
      onValueChange={(e) => {
        const nextPlatform = e as (typeof PLATFORMS)[number];
        setSelectedPlatform(nextPlatform);
        handleUpdateLink(linkId, nextPlatform);
      }}
      defaultValue={selectedPlatform}
      value={selectedPlatform}
    >
      <Select.Trigger
        className="group flex h-12 w-full items-center justify-between bg-white px-4 py-3"
        aria-label="Food"
      >
        <div className="flex items-center gap-2">
          <SocialIcon className="size-4" id={selectedPlatform} />
          <Select.Value placeholder="Select a Social…" />
        </div>
        <Select.Icon className="text-brand-purple-300">
          <ChevronDown
            className="transition-transform group-data-[state=open]:rotate-180"
            size={16}
          />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          avoidCollisions={false}
          sideOffset={12}
          className="h-[--radix-popper-available-height] w-[--radix-popper-anchor-width] overflow-y-auto rounded-md bg-white px-4 py-3"
        >
          <Select.Viewport>
            <Select.Group className="text-brand-gray-300">
              {PLATFORMS.map((platform, idx) => (
                <SelectItem
                  disabled={
                    selectedPlatforms.includes(platform) &&
                    platform !== selectedPlatform
                  }
                  selected={selectedPlatform === platform}
                  seperator={idx !== PLATFORMS.length - 1}
                  platform={platform}
                />
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

function SelectItem({
  platform,
  seperator,
  selected,
  disabled,
}: {
  platform: (typeof PLATFORMS)[number];
  seperator: boolean;
  selected: boolean;
  disabled: boolean;
}) {
  return (
    <>
      <Select.Item
        className={cn(
          `relative flex items-center gap-2 overflow-clip rounded p-2 text-brand-gray-300`,
          selected && "text-brand-purple-300",
          disabled && "opacity-50",
          !selected && !disabled && "hover:bg-brand-gray-100",
        )}
        value={platform}
        disabled={disabled}
      >
        <SocialIcon className="size-4" id={platform} />
        <Select.ItemText className="text-base">{platform}</Select.ItemText>
      </Select.Item>
      {seperator && (
        <Select.Separator className="my-3 h-px bg-brand-gray-200"></Select.Separator>
      )}
    </>
  );
}
