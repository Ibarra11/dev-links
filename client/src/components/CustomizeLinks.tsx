import { PlusIcon } from "lucide-react";
import EmptyLink from "../assets/images/illustration-empty.svg";
import Button from "./Button";
import React from "react";
import SocialLinks from "./SocialLinks";
import { PLATFORMS, PLATFORM_PATTERNS } from "../lib/constants";
import { Link, Platforms, LinkError } from "../types";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
  createSnapModifier,
} from "@dnd-kit/modifiers";

export default function CustomizeLinks() {
  const [links, setLinks] = React.useState<Array<Link>>([]);
  const [errors, setErrors] = React.useState<Record<
    Platforms,
    LinkError
  > | null>(null);

  const gridSize = 20; // pixels
  const snapToGridModifier = createSnapModifier(gridSize);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = {} as Record<Platforms, LinkError>;
    const hasErrors = links.filter((link) => {
      if (link.url.trim() === "") {
        return true;
      }
      if (
        !PLATFORM_PATTERNS[link.platform].test(link.url.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    });

    if (hasErrors.length > 0) {
      hasErrors.forEach((link) => {
        if (link.url.trim() === "") {
          errors[link.platform] = { type: "empty_url" };
        } else {
          errors[link.platform] = { type: "invalid_url" };
        }
      });
    }
    setErrors(errors);
  }

  function removeError(platform: Platforms) {
    if (errors && errors[platform]) {
      delete errors[platform];
    }
  }

  function handleRemoveLink(platform: Platforms) {
    const index = links.findIndex((link) => link.platform === platform);
    if (index >= 0) {
      if (index === links.length - 1) {
        setLinks(links.slice(0, -1));
      } else {
        const leftHalf = links.slice(0, index);
        const rightHalf = links.slice(index + 1);
        setLinks(leftHalf.concat(rightHalf));
      }
    }
    removeError(platform);
  }

  function handleUpdateLinkUrl(platform: Platforms, url: string) {
    const nextLinks = links.map((link) => {
      if (link.platform === platform) {
        return { ...link, url };
      }
      return link;
    });
    setLinks(nextLinks);
    removeError(platform);
  }

  function handleUpdateLinkPlatform(
    prevPlatform: Platforms,
    nextPlatform: Platforms,
  ) {
    const nextLinks = links.map((link) => {
      if (link.platform === prevPlatform) {
        return { ...link, platform: nextPlatform };
      }
      return link;
    });
    setLinks(nextLinks);
    removeError(prevPlatform);
  }

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (over && active.id !== over.id) {
      const nextLinks = [...links];
      const activePosition: number = (active.data.current as any).position;
      const overPosition: number = (over.data.current as any).position;
      const temp = nextLinks[overPosition];
      nextLinks[overPosition] = nextLinks[activePosition];
      nextLinks[activePosition] = temp;
      setLinks(nextLinks);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex h-full flex-col lg:mx-auto lg:w-full lg:max-w-5xl"
      >
        <div className="relative flex-1 overflow-y-auto border border-green-500 p-6 md:p-10 lg:pt-16">
          <div className="mb-10 space-y-2">
            <h1 className="text-2xl font-bold text-brand-gray-300 md:text-4xl">
              Customize your links
            </h1>
            <p className="text-base text-brand-gray-300">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="mb-6">
            <Button
              onClick={() => {
                // When they select a link defaul to the first available platform,
                const defaultPlatform = PLATFORMS.find((platform) => {
                  return links.every((link) => link.platform !== platform);
                })!;
                setLinks([
                  ...links,
                  {
                    platform: defaultPlatform,
                    url: "",
                  },
                ]);
              }}
              disabled={links.length === PLATFORMS.length}
              className="gap-1"
              variant="secondary"
              type="button"
            >
              <PlusIcon size={16} />
              Add New Link
            </Button>
          </div>
          {links.length > 0 ? (
            <DndContext
              onDragEnd={handleDragEnd}
              modifiers={[
                restrictToParentElement,
                restrictToVerticalAxis,
                snapToGridModifier,
              ]}
            >
              <SocialLinks
                handleUpdateLinkPlatform={handleUpdateLinkPlatform}
                handleUpdateLinkUrl={handleUpdateLinkUrl}
                handleRemoveLink={handleRemoveLink}
                links={links}
                errors={errors}
              />
            </DndContext>
          ) : (
            <EmptyViewLink />
          )}
        </div>
        <div>
          {/* divider */}
          <div className="h-px bg-brand-gray-200 lg:hidden"></div>
          {/* Save button */}
          <div className="p-4 md:px-10 md:py-6">
            <Button
              className="md:hidden"
              disabled={links.length === 0}
              variant="primary"
            >
              Save
            </Button>
            <div className="hidden md:flex md:justify-end lg:hidden">
              <Button disabled={links.length === 0} size="sm" variant="primary">
                Save
              </Button>
            </div>
            <div className="mx-auto hidden lg:block lg:w-full lg:max-w-lg">
              <Button disabled={links.length === 0} variant="primary">
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function EmptyViewLink() {
  return (
    <div className="flex h-96 items-center rounded-xl bg-brand-gray-100 p-5 md:h-[500px]">
      <div className="w-full">
        <div className="flex justify-center">
          <img
            src={EmptyLink}
            aria-hidded="true"
            className="block h-20 w-32 object-cover md:h-40 md:w-60"
          />
        </div>
        <h2 className="mt-6 text-center text-xl font-bold text-brand-gray-300 md:text-2xl">
          Let's get you started
        </h2>
        <p className="mx-auto mt-6 max-w-md text-center text-base">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We're here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
}
