import NeutralList from "@/app/components/themes/Neutral/NeutralList"
import SaharaList from "@/app/components/themes/Sahara/SaharaList"
import Image from "next/image"
import { BlogLayout } from "../../page"

export default async function IssuePage({
    params,
    searchParams
}:{
    params: {
        id: string
    },
    searchParams: Promise<{
        theme: "sahara" | "neutral";
      }>
}){
    const themeQuery = (await searchParams).theme;
    const IssueComponent = themeQuery === "neutral" ? NeutralList : SaharaList         // change it with issue component.
    return (
        <>
            {/* <BlogLayout theme={themeQuery}> */}
                <p>ACTIVE THEME: {themeQuery}</p>
                <p>Im issue page {JSON.stringify(params)}</p>
                <Image alt="demo-img" src={"https://swiperjs.com/demos/images/nature-1.jpg"} width={30} height={30} unoptimized className="w-full object-contain h-full"/>
            {/* </BlogLayout> */}
        </>
    )
}