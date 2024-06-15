import SocialLink from "./SocialLink";

interface Props {
  links: Array<{ id: string }>;
  handleRemoveLink: (linkId: string) => void;
}
export default function SocialLinks({ links, handleRemoveLink }: Props) {
  return (
    <div className="space-y-6">
      {links.map((link, idx) => (
        <SocialLink
          handleRemoveLink={handleRemoveLink}
          key={link.id}
          linkNumber={idx + 1}
          linkId={link.id}
        />
      ))}
    </div>
  );
}
