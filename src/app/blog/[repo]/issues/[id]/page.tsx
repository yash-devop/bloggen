import Image from "next/image"

export default async function IssuePage({
    params,
    searchParams
}:{
    params: Promise<{
        id: string
    }>,
    searchParams: Promise<{
        theme: "sahara" | "neutral";
      }>
}){
    const themeQuery = (await searchParams).theme;
    const query = (await params).id
    // const IssueComponent = themeQuery === "neutral" ? NeutralList : SaharaList         // change it with issue component.
    return (
        <>
                <p>ACTIVE THEME: {themeQuery}</p>
                <p>Im issue page {JSON.stringify(query)}</p>
                <Image alt="demo-img" src={"https://swiperjs.com/demos/images/nature-1.jpg"} width={30} height={30} unoptimized className="w-full object-contain h-full"/>
        </>
    )
}