import { createContext, useContext, useState } from "react";
import { InputError, Link, Platforms } from "../types";

interface Context {
  links: Array<Link>;
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  handleRemoveLink: (platform: Platforms) => void;
  handleUpdateLinkUrl: (platform: Platforms, url: string) => void;
  handleUpdateLinkPlatform: (
    prevPlatform: Platforms,
    nextPlatform: Platforms,
  ) => void;
  errors: Record<Platforms, InputError> | null;
  setErrors: React.Dispatch<
    React.SetStateAction<Record<Platforms, InputError> | null>
  >;
}

const LinksContext = createContext<Context>({} as Context);

export function useLinks() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("Must be used within a LinksProvider");
  }
  return context;
}

export default function LinksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [links, setLinks] = useState<Array<Link>>([]);
  const [errors, setErrors] = useState<Record<Platforms, InputError> | null>(
    null,
  );

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

  function removeError(platform: Platforms) {
    if (errors && errors[platform]) {
      delete errors[platform];
    }
  }

  return (
    <LinksContext.Provider
      value={{
        links,
        errors,
        setErrors,
        setLinks,
        handleRemoveLink,
        handleUpdateLinkPlatform,
        handleUpdateLinkUrl,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}
