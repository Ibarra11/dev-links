import PhoneMockup from "../assets/images/illustration-phone-mockup.svg";
export default function IphoneMockupLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="h-full lg:flex lg:gap-6">
      <div className="hidden lg:grid lg:flex-1 lg:place-content-center">
        <img className="h-[600px] w-80" src={PhoneMockup} alt="phone mockup" />
      </div>
      <div className="h-full lg:flex-1">{children}</div>
    </div>
  );
}
