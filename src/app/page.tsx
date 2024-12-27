"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Stories from "react-insta-stories";
import BlogFooter from "./components/themes/BlogFooter";
import { Button } from "./components/ui/button";

export default function Home() {
  const [storiesLoaded, setStoriesLoaded] = useState(false);

  const UI = [
    {
      url: "/neutral.png",
    },
    {
      url: "/sahara.png",
    },
  ];

  useEffect(() => {
    setStoriesLoaded(true);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col max-w-[1400px] mx-auto">
      <Navbar />

        <div
          className="relative max-w-[1400px] mx-auto w-full bg-cover bg-center rounded-tr-xl rounded-tl-xl my-3"
          style={{
            backgroundImage: "url('/pink2.png')",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fe526ca4] from-0% to-white to-100% opacity-100 z-[1] rounded-tr-xl rounded-tl-xl"></div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white to-100%"></div> */}
          {/* <div className="absolute -bottom-5 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-white to-100% z-[1]"></div> */}

          <div className="mx-auto text-center font-sans flex-grow relative z-10 pt-40">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-7xl font-semibold tracking-tight text-white drop-shadow-2xl backdrop-blur-[2px] py-3">
                Turn your github repository <br />
                issues into a blog
              </h1>
              <p className="font-medium text-[#f0f0f0] tracking-wide text-xl py-5">
                Transform your GitHub issues into polished, shareable blogs — <br />
                streamline knowledge, one post at a time.
              </p>

              <div className="flex items-center justify-center backdrop-blur-sm gap-7 pt-8 pb-12 font-sans transition-all">
              <Button className="font-sans border border-[#2b2b2b] bg-black hover:bg-black text-white hover:bg-gradient-to-t transition-colors hover:from-black hover:to-[#2b2b2b] focus:bg-gradient-to-t focus:from-gray-700 focus:to-gray-900 duration-300 ease-in-out">
              Get Started - It&apos;s free
              </Button>
                {/* <Button className="text-[#FE526C] bg-white">Get Started - It&apos;s free</Button> */}
              </div>
            </div>

            <div className="max-w-5xl w-full mx-auto py-2 bg-[#e299a4] p-2 rounded-xl ">
              {storiesLoaded ? (
                <Stories
                  key={Math.random()}
                  stories={UI}
                  defaultInterval={8000}
                  width="100%"
                  height="100%"
                  storyContainerStyles={{
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                  storyStyles={{
                    objectFit: "contain",
                    borderRadius: "12px",
                    border: "1px solid #D5D5D5",
                  }}
                  progressStyles={{
                    backgroundColor: "#FE526C",
                    borderRadius: "15px",
                  }}
                  progressContainerStyles={{
                    marginTop: "-25px",
                    width: "100%",
                    padding: "0px",
                  }}
                  loop={true}
                />
              ) : (
                <div className="h-[650px] bg-neutral-200 w-full"></div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-[1480px] mx-auto h-[1200px] flex-grow pt-10">
                <p>JODDDJD KDOSKOPDAI DNSJND SK</p>
        </div>

        {/* Rest of the content */}
        <div className="bg-red-400 flex-grow">
          <BlogFooter />
        </div>
      </div>
    </>
  );
}




// "use client";
// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Stories from "react-insta-stories";
// import BlogFooter from "./components/themes/BlogFooter";

// export default function Home() {
//   const [storiesLoaded, setStoriesLoaded] = useState(false);

//   const UI = [
//     {
//       url: "/neutral.png",
//     },
//     {
//       url: "/sahara.png",
//     },
//   ];

//   useEffect(() => {
//     setStoriesLoaded(true);
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <div
//           className="relative w-full bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/pink2.png')",
//           }}
//         >
//           <div className="absolute top-0 left-0 w-full h-full bg-[#eae9e9] opacity-20 z-[1]"></div>
//           <div className="relative z-10">
//             <Navbar />
//           </div>

//           <div className="mx-auto text-center font-sans flex-grow relative z-10 pt-16">
//             <h1 className="text-6xl font-semibold tracking-tight text-white">
//               Turn your github repository <br />
//               issues into a blog
//             </h1>
//             <p className="py-6 font-medium text-[#f0f0f0] drop-shadow-md">
//               Transform your GitHub issues into polished, shareable blogs — <br />
//               streamline knowledge, one post at a time.
//             </p>

//             <div className="max-w-5xl w-full mx-auto py-4">
//               {storiesLoaded ? (
//                 <Stories
//                   key={Math.random()}
//                   stories={UI}
//                   defaultInterval={8000}
//                   width="100%"
//                   height="100%"
//                   storyContainerStyles={{
//                     objectFit: "cover",
//                     borderRadius: "16px",
//                   }}
//                   storyStyles={{
//                     objectFit: "contain",
//                     borderRadius: "12px",
//                     border: "1px solid #D5D5D5",
//                   }}
//                   progressStyles={{
//                     backgroundColor: "#FE526C",
//                     borderRadius: "15px",
//                   }}
//                   progressContainerStyles={{
//                     marginTop: "-20px",
//                     width: "100%",
//                     padding: "0px",
//                   }}
//                   loop={true}
//                 />
//               ) : (
//                 <div className="h-[650px] bg-neutral-200 w-full"></div>
//               )}
//             </div>
//           </div>

//           {/* Gradient overlay for styling */}
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[white] z-[1]"></div>
//         </div>

//         <div className="h-full border flex-grow">

//         </div>

//         {/* Rest of the content */}
//         <div className="bg-red-400 flex-grow">
//           <BlogFooter />
//         </div>
//       </div>
//     </>
//   );
// }
