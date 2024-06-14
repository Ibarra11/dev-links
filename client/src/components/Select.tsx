import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { PLATFORMS } from "../lib/constants";
import React from "react";
import { SocialIcon } from "./SocialIcon";

export default function PlatformSelect() {
  const [selected, setSelected] = React.useState<(typeof PLATFORMS)[number]>(
    PLATFORMS[0],
  );
  return (
    <Select.Root
      onValueChange={(e) => {
        setSelected(e as (typeof PLATFORMS)[number]);
      }}
      defaultValue={selected}
      value={selected}
    >
      <Select.Trigger
        className="group flex h-12 w-full items-center justify-between bg-white px-4 py-3"
        aria-label="Food"
      >
        <div className="flex items-center gap-2">
          <SocialIcon className="size-4" id={selected} />
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
                  selected={selected === platform}
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
}: {
  platform: (typeof PLATFORMS)[number];
  seperator: boolean;
  selected: boolean;
}) {
  return (
    <>
      <Select.Item
        className={`relative flex items-center gap-2 overflow-clip rounded px-2 py-1 text-brand-gray-300 ${selected ? "text-brand-purple-300" : "hover:bg-brand-gray-100"} `}
        value={platform}
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
