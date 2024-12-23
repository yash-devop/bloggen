import ClientAuthButton from "@/app/components/ClientAuthButton";
// import { signIn } from "next-auth/react";
// import { cookies } from "next/headers";

export default function Signin() {
  return (
    <>
      <div className="min-h-screen h-full flex items-center justify-center p-2 pt-12">
        <div className="max-w-[400px] w-full mx-auto h-[600px] overflow-auto flex flex-col p-2">
          <div className="flex flex-col gap-3">
            <div className="text-center space-y-4 pb-8 flex items-center justify-center flex-col">

              <p className="text-center italic font-extralight text-sm cursor-default">
              &quot; Never Miss a Beat with Uptime Monitoring &quot;
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <ClientAuthButton 
                type="github"
                redirectTo={`/install`}
              />
            </div>
          </div>
          <div className="flex text-center justify-center text-sm py-4 font-extralight cursor-default">
            <p>© {new Date().getFullYear()} Control, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
}
