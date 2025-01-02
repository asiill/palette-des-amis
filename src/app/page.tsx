import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">

      <div className="grid grid-cols-2 items-center p-16">

        <div className="col-span-1 flex flex-col gap-4">
          <h1 className="text-3xl">Friends' Palette</h1>
          <p className="text-lg">
            Ignite your creativity and find your community by connecting with fellow artists through engaging art challenges and projects.
          </p>
          <Link href="/singup">
            <button className="text-sm flex items-center justify-center rounded-lg p-2 w-fit font-bold bg-[#73b9be]">
              Start here
            </button>
          </Link>
        </div>

        <div className="col-span-1 flex justify-self-end">
          <Image
            src="/images/painting.png"
            width={400}
            height={400}
            alt="a colour palette"
            style={{
              borderRadius: "100px",
            }}
          />
        </div>

      </div>

      <div id="about" className="flex flex-col gap-6 p-16">
        <h2 className="text-2xl">About...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div id="contact" className="flex flex-col gap-6 p-16">
        <h2 className="text-2xl">Contact...</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </main>
  );
}
