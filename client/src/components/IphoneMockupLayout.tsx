import IphoneMockup from "./IphoneMockup";
import { useLinks } from "./LinksProvider";
import SocialCard from "./SocialCard";
export default function IphoneMockupLayout({
  children,
}: React.PropsWithChildren) {
  const { links } = useLinks();
  return (
    <div className="h-full lg:flex lg:gap-6">
      <div className="hidden lg:grid lg:flex-1 lg:place-content-center">
        <div className="relative">
          <IphoneMockup />
          {links.map((link, idx) => (
            <div
              style={{ top: 278 + 64 * idx }}
              className={`absolute left-[35px] h-12 w-60 rounded-lg`}
            >
              <SocialCard social={link.platform} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-full lg:flex-1">{children}</div>
    </div>
  );
}
