import Link from "next/link";
import ClientSideLogoutButton from "../components/ClientLogoutButton";
import SoloLogo from "../components/logos/logo";
import { Button } from "../components/ui/button";
import { BloggenVector } from "../components/svgs/BloggenVector";

export default function InstallerPage() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col justify-center items-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center h-full flex-grow">
        <InstallCard />
        <div className="overflow-hidden translate-y-10 relative hidden lg:block">
          <BloggenVector />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.48) 72%)",
            }}
          />
        </div>
      </div>
      <ClientSideLogoutButton className="rounded-md absolute bottom-2"/>
    </div>
  );
}

const InstallCard = () => {
  return (
<div className="min-h-[400px] md:min-h-[470px] max-w-[95%] sm:max-w-[400px] lg:min-w-[390px] border border-neutral-300 rounded-xl absolute bg-[#ffffff44] flex flex-col p-6 shadow-2xl z-10">
      <div className="flex flex-col min-h-full justify-between space-y-4 flex-grow w-full">
        <div className="space-y-2 pt-20 flex items-center justify-center flex-col w-full">
          <SoloLogo />
          <h1 className="text-black font-sans font-medium tracking-tighter">
            Install Bloggen app
          </h1>
        </div>
        {/* Move this entire section to the bottom */}
        <div className="mt-auto space-y-2 w-full">
          <p className="text-neutral-500 text-xs tracking-tight text-center py-2">
            This step will install this app in your github account.
          </p>
          <Link
            target="_blank"
            href={"https://github.com/apps/bloggen/installations/new"}
          >
            <Button className="w-full rounded-md">Install</Button>
          </Link>
        </div>
      </div>


      {/* Top SVG with mask */}
      <svg
        width="120%"
        height="2px"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-10 right-0 -top-0.5"
      >
        <defs>
          <mask id="mask-top">
            <line
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="0.2 0.5"
            />
          </mask>
          <linearGradient id="gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="8%" stopColor="#CACACA" />
            <stop offset="92%" stopColor="#CACACA" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="2px"
          fill="url(#gradient-top)"
          mask="url(#mask-top)"
        />
      </svg>

      {/* Bottom SVG with mask */}
      <svg
        width="120%"
        height="2px"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-10 right-0 -bottom-0.5"
      >
        <defs>
          <mask id="mask-bottom">
            <line
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="0.2 0.5"
            />
          </mask>
          <linearGradient
            id="gradient-bottom"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="8%" stopColor="#CACACA" />
            <stop offset="92%" stopColor="#CACACA" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          width="100%"
          height="2px"
          fill="url(#gradient-bottom)"
          mask="url(#mask-bottom)"
        />
      </svg>

      {/* Left SVG with mask */}
      <svg
        width="2px"
        height="115%"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-0.5 -top-8"
      >
        <defs>
          <mask id="mask-left">
            <line
              x1="0.5"
              y2="100"
              x2="0.5"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="0.2 0.5"
            />
          </mask>
          <linearGradient id="gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="8%" stopColor="#CACACA" />
            <stop offset="92%" stopColor="#CACACA" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          width="2px"
          height="100%"
          fill="url(#gradient-left)"
          mask="url(#mask-left)"
        />
      </svg>

      {/* Right SVG with mask */}
      <svg
        width="2px"
        height="115%"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-0.5 -top-8"
      >
        <defs>
          <mask id="mask-right">
            <line
              x1="0.5"
              y2="100"
              x2="0.5"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="0.2 0.5"
            />
          </mask>
          <linearGradient id="gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="8%" stopColor="#CACACA" />
            <stop offset="92%" stopColor="#CACACA" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect
          width="2px"
          height="100%"
          fill="url(#gradient-right)"
          mask="url(#mask-right)"
        />
      </svg>
    </div>
  );
};
