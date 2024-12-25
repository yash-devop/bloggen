import { getTheme } from "@/app/utils/getTheme";
import { Link } from "lucide-react";

export default async function NotFound() {
  const theme = await getTheme()
  return (
    <>
      <div className={`${theme === "sahara" ? "text-black" : "text-white"}`}>
        <h2>PAGE NOT FOUND</h2>
        <p>404</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
}
