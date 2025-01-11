import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
    return (
        <header className="flex flex-col gap-8 items-center p-16 pb-6 sm:flex-row sm:justify-between">
            <Link href="/">
                <div className="flex gap-2 items-center">
                    <Image
                        src="/images/palette.png"
                        width={200}
                        height={133}
                        alt="a colour palette"
                    />
                </div>
            </Link>
            <nav className="text-md flex flex-col gap-10 sm:flex-row sm:items-center">
                <div className="transition hover:text-[#73b9be]"><Link href="/#about">About</Link></div>
                <div className="transition hover:text-[#73b9be]"><Link href="/#contact">Contact</Link></div>
                <Button link="login"/>
                <Button link="signup" />
            </nav>
        </header>
    );
};