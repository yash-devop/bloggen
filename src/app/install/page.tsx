import Link from "next/link";
import ClientSideLogoutButton from "../components/ClientLogoutButton";

export default function InstallerPage() {
  return (
    <>
      <Link
        target="_blank"
        href={"https://github.com/apps/bloggen/installations/new"}
      >
        <p>Click to Install Bloggen APP</p>
      </Link>

      <ClientSideLogoutButton />
    </>
  );
}
