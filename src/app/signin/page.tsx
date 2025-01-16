import ClientAuthButton from "@/app/components/ClientAuthButton";
import Bloggen from "../components/logos/bloggen";

export default function Signin() {
  return (
    <>
      <div className="min-h-screen h-full flex items-center justify-center p-2 pt-12">
        <div className="max-w-[400px] w-full mx-auto h-[600px] overflow-auto flex flex-col p-2">
          <div className="flex flex-col gap-3">
            <div className="text-center space-y-4 pb-8 flex items-center justify-center flex-col">
              <p className="text-center italic font-extralight text-sm cursor-default">
                &quot; Turn your Github Repo into beautiful blogs. &quot;
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-10 pt-3">
              <Bloggen />
              <ClientAuthButton type="github" redirectTo={`/install`} buttonProps={{className: "rounded-lg w-full"}}/>
            </div>
          </div>
          <div className="flex text-center justify-center text-sm py-4 font-extralight cursor-default">
            <p>© {new Date().getFullYear()} Bloggen, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
}
