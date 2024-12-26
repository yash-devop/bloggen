import Link from "next/link";
import Bloggen from "./logos/bloggen";
import { Button } from "./ui/button";

export default function Navbar(){
    return (
        <>
            <header className="border-b border-b-[#DADADA]">
                <nav className="flex p-3 justify-between items-center">
                    <Bloggen />
                    <div className="flex gap-2">
                        <Link href={`/signin`}>
                            <Button>Login</Button>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}