import { InputError, Link, Platforms } from "../types";

import SocialLink from "./SocialLink";

interface Props {
  links: Array<Link>;
  handleRemoveLink: (platform: Platforms) => void;
  handleUpdateLinkPlatform: (
    prevPlatform: Platforms,
    nextPlatform: Platforms,
  ) => void;
  handleUpdateLinkUrl: (platform: Platforms, url: string) => void;
  errors: Record<Platforms, InputError> | null;
}
export default function SocialLinks({
  links,
  handleRemoveLink,
  handleUpdateLinkPlatform,
  handleUpdateLinkUrl,
  errors,
}: Props) {
  return (
    <div className="space-y-6">
      {links.map((link, idx) => (
        <SocialLink
          handleRemoveLink={handleRemoveLink}
          key={link.platform}
          linkNumber={idx + 1}
          selectedPlatform={link.platform}
          selectedPlatforms={links.map((link) => link.platform)}
          handleUpdateLinkPlatform={handleUpdateLinkPlatform}
          handleUpdateLinkUrl={handleUpdateLinkUrl}
          errors={errors}
        />
      ))}
    </div>
  );
}
