import CustomizeLinks from "../components/CustomizeLinks";
import PhoneMockup from "../assets/images/illustration-phone-mockup.svg";
export default function LinksEditorPage() {
  return (
    <div className="lg:flex lg:h-full lg:gap-6">
      <div className="hidden lg:grid lg:flex-1 lg:place-content-center">
        <img className="h-[600px] w-80" src={PhoneMockup} alt="phone mockup" />
      </div>
      <div className="lg:flex-1 lg:py-12">
        <CustomizeLinks />
      </div>
    </div>
  );
}
