import ClientSideLogoutButton from "../ClientLogoutButton";
import SoloLogo from "../logos/logo";

export default function Dashbar() {
  return (
    <>
      <header className="border-b border-b-[#DADADA]">
        <nav className="flex justify-between items-center w-full mx-auto px-4 py-2">
            <SoloLogo />
            <ClientSideLogoutButton className="w-fit"/>
        </nav>
      </header>
    </>
  );
}
