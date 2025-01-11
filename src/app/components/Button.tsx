import Link from "next/link";

interface ButtonProps {
    link: string;
}

export default function Button({ link}: ButtonProps) {
    const text = link.charAt(0).toUpperCase() + link.slice(1);
    return (
        <Link href={`/${link}`} passHref>
            <button className="flex items-center justify-center rounded-lg p-1.5 w-fit bg-[#73b9be] shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] transition hover:opacity-80">
                {text}
            </button>
        </Link>
    );
}