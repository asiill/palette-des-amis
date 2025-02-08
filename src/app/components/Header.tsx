import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="flex flex-col gap-6 items-center p-8 sm:p-16 sm:pb-8 sm:flex-row sm:justify-between">
            <Link href="/">
                <div className="flex gap-2 items-center">
                    <Image
                        src="/images/logo.png"
                        width={200}
                        height={133}
                        alt="Two girls standing shoulder to shoulder. One is holding up a paint brush and the other is holding up a palette and two paint brushes. The text 'Friends' Palette' appears underneath the image."
                        style={{
                            minWidth: "100px",
                        }}
                    />
                </div>
            </Link>
            <nav className="text-sm sm:text-base flex flex-col gap-6 sm:gap-10 sm:flex-row sm:items-center">
                <div className="transition hover:text-[#73b9be]"><Link href="/#about">About</Link></div>
                <div className="transition hover:text-[#73b9be]"><Link href="/#contact">Contact</Link></div>
                <Nav link="login" text="Login" />
                <Nav link="signup" text="Signup" />
            </nav>
        </header>
    );
};