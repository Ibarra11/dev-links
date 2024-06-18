import { PLATFORMS } from "../lib/constants";
import { Platforms } from "../types";
import SocialLink from "./SocialLink";

interface Props {
  links: Array<{ id: string; platform: Platforms }>;
  handleRemoveLink: (linkId: string) => void;
  handleUpdateLink: (linkId: string, nextPlatform: Platforms) => void;
}
export default function SocialLinks({
  links,
  handleRemoveLink,
  handleUpdateLink,
}: Props) {
  return (
    <div className="space-y-6">
      {links.map((link, idx) => (
        <SocialLink
          handleRemoveLink={handleRemoveLink}
          key={link.id}
          linkNumber={idx + 1}
          linkId={link.id}
          selectedPlatform={link.platform}
          selectedPlatforms={links.map((link) => link.platform)}
          handleUpdateLink={handleUpdateLink}
        />
      ))}
    </div>
  );
}
