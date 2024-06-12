import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { PLATFORMS } from "../lib/constants";
import React from "react";
import { cn } from "../lib/utils";

export default function PlatformSelect() {
  return (
    <Select.Root>
      <Select.Trigger
        className="flex h-12 w-full items-center justify-between bg-white px-4 py-3"
        aria-label="Food"
      >
        <Select.Value placeholder="Select a Social…" />
        <Select.Icon className="text-brand-gray-300">
          {/* <ChevronDownIcon /> */}
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={12}
          className="w-[--radix-popper-anchor-width] overflow-hidden rounded-md bg-white px-4 py-3"
        >
          <Select.Viewport>
            <Select.Group>
              {PLATFORMS.map((platform, idx) => (
                <SelectItem
                  seperator={idx !== PLATFORMS.length - 1}
                  platform={platform}
                />
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
            {/* <ChevronDownIcon /> */}
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

function SelectItem({
  platform,
  seperator,
}: {
  platform: string;
  seperator: boolean;
}) {
  return (
    <>
      <Select.Item value={platform}>
        <Select.ItemText>{platform}</Select.ItemText>
      </Select.Item>
      {seperator && (
        <Select.Separator className="my-3 h-px bg-brand-gray-200"></Select.Separator>
      )}
    </>
  );
}
