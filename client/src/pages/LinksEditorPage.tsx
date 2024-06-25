import CustomizeLinks from "../components/CustomizeLinks";
import IphoneMockupLayout from "../components/IphoneMockupLayout";
import LinksProvider from "../components/LinksProvider";
export default function LinksEditorPage() {
  return (
    <LinksProvider>
      <IphoneMockupLayout>
        <CustomizeLinks />
      </IphoneMockupLayout>
    </LinksProvider>
  );
}
