import Image from "next/image";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 sm:gap-20">

      <div className="flex flex-col gap-8 justify-center items-center p-8 sm:p-16 sm:pt-0 sm:flex-row sm:gap-20">
        <div className="flex flex-col gap-8 max-w-md">
          <h1 className="gradient-text font-bold text-3xl sm:text-5xl">Friends&#39; Palette</h1>
          <p className="text-base sm:text-xl">
            Share ideas and inspire your imagination by connecting with others though art challenges and projects.
          </p>
          <div>
            <Nav link="signup" text="Start Here" />
          </div>
        </div>
        <div className="flex order-first justify-center sm:order-last">
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="A grayscale sketch of two girls sitting face to face and painting on a canvas."
            style={{
              borderRadius: "100px",
              minWidth: "100px",
            }}
          />
        </div>
      </div>

      <div id="about" className="flex flex-col items-center gap-4 p-8 sm:p-16 bg-[rgba(0,0,0,0.05)]">
        <h2 className="text-2xl sm:text-4xl">Create, Connect, <span className="gradient-text">Collaborate</span></h2>
        <p className="text-base sm:text-xl text-gray-700">A place to your channel your creativity.</p>
        <About />
      </div>
            
      <div id="contact" className="grid grid-cols-1 gap-8 items-center p-8 sm:p-16 sm:pt-0 sm:grid-cols-2">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-2xl sm:text-4xl">Have <span className="gradient-text">Questions</span> ?</h2>
          <p className="text-base text-gray-700 sm:text-xl">Send us a message here...</p>
          <Contact />
        </div>
        <div className="flex order-first justify-center items-center sm:order-last">
            <Image
              src="/images/pexels-pixabay-356372.jpg"
              width={500}
              height={500}
              alt="a piece of paper on a wooden table with an ink pen held over it, about to write a letter. A rose petal, the pen cap and an opened bottle of ink sit next to it."
              style={{
                borderRadius: "40px",
                maxWidth: "500px",
                minWidth: "100px",
              }}
            />
        </div>
      </div>

    </main>
  );
}

//Photo by Pixabay: https://www.pexels.com/photo/brown-fountain-pen-356372/