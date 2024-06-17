import { PlusIcon } from "lucide-react";
import EmptyLink from "../assets/images/illustration-empty.svg";
import Button from "./Button";
import React from "react";
import SocialLinks from "./SocialLinks";
import { PLATFORMS } from "../lib/constants";

export default function CustomizeLinks() {
  const [links, setLinks] = React.useState<
    Array<{ id: string; platform: (typeof PLATFORMS)[number] }>
  >([]);

  function handleRemoveLink(linkId: string) {
    const index = links.findIndex((link) => link.id === linkId);
    if (index >= 0) {
      if (index === links.length - 1) {
        setLinks(links.slice(0, -1));
      } else {
        const leftHalf = links.slice(0, index);
        const rightHalf = links.slice(index + 1);
        setLinks(leftHalf.concat(rightHalf));
      }
    }
  }

  function handleUpdateLink(
    linkId: string,
    nextPlatform: (typeof PLATFORMS)[number],
  ) {
    const nextLinks = links.map((link) => {
      if (link.id === linkId) {
        return { ...link, platform: nextPlatform };
      }
      return link;
    });
    console.log(nextLinks);
    setLinks(nextLinks);
  }
  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      <form className="flex h-full flex-col lg:mx-auto lg:w-full lg:max-w-5xl">
        <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:pt-16">
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
                    id: crypto.randomUUID(),
                    platform: defaultPlatform,
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
            <SocialLinks
              handleUpdateLink={handleUpdateLink}
              handleRemoveLink={handleRemoveLink}
              links={links}
            />
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
