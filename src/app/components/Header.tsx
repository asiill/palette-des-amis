import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col gap-8 p-12 pb-6 md:flex-row md:justify-between md:items-center">
            <Link href="/">
                <div className="flex gap-2 items-center">
                    <Image
                        src="/images/palette.png"
                        width={25}
                        height={25}
                        alt="a colour palette"
                    />
                    <h1 className="text-md">Palette des amis</h1>
                </div>
            </Link>
            <nav className="text-md flex flex-col gap-6 md:flex-row md:items-center">
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </nav>
        </header>
    );
};