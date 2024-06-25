import { InputError, Link, Platforms } from "../types";

import SocialLink from "./SocialLink";

interface Props {
  links: Array<Link>;
}
export default function SocialLinks({ links }: Props) {
  return (
    <div className="space-y-6">
      {links.map((link, idx) => (
        <SocialLink
          key={link.platform}
          linkNumber={idx + 1}
          selectedPlatform={link.platform}
          selectedPlatforms={links.map((link) => link.platform)}
          linkUrl={link.url}
        />
      ))}
    </div>
  );
}
