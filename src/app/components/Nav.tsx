import Link from "next/link";

interface NavProps {
    link: string;
    text: string;
}

export default function Nav({ link, text }: NavProps) {
    return (
        <Link href={`/${link}`} passHref>
            <div className="flex items-center justify-center px-4 w-fit h-10 bg-default shadow-md text-sm sm:text-base border border-solid border-[#73b9be] rounded-xl transition hover:text-white hover:bg-[#73b9be]">
                {text}
            </div>
        </Link>
    );
}