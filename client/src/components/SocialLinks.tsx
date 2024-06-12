import SocialLink from "./SocialLink";

interface Props {
  links: Array<number>;
}
export default function SocialLinks({ links }: Props) {
  return (
    <div className="space-y-6">
      {links.map((link, idx) => (
        <SocialLink key={idx} linkNumber={idx + 1} />
      ))}
    </div>
  );
}
