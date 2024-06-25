import IphoneMockup from "./IphoneMockup";
import { useUserProfile } from "./UserProfileProvider";
import SocialCard from "./SocialCard";
export default function IphoneMockupLayout({
  children,
}: React.PropsWithChildren) {
  const { links, profile } = useUserProfile();

  return (
    <div className="h-full lg:flex lg:gap-6">
      <div className="hidden lg:grid lg:flex-1 lg:place-content-center">
        <div className="relative">
          <IphoneMockup />
          <div className="absolute left-[148px] top-[112px] size-24 -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-full">
            {profile.picture && (
              <img src={profile.picture} className="h-full w-full" />
            )}
          </div>
          <div className="absolute left-9 top-[278px] flex h-[304px] w-60 flex-col gap-4 overflow-y-auto">
            {links.map((link) => (
              <div className={`h-12 w-full shrink-0 rounded-lg`}>
                <SocialCard social={link.platform} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full lg:flex-1">{children}</div>
    </div>
  );
}
