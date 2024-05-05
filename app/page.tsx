import Image from "next/image";
import PageTransEffect from "./components/pageTransEffect";
import Link from "next/link";

export default function Home() {
  return (
    <PageTransEffect>
      <main className="flex flex-col lg:flex-row h-full text-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src={"/hero.png"}
            alt="hero image"
            fill
            className="object-contain"
          ></Image>
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold md:text-6xl">Title</h1>
          <p>
            Description <br /> I Want The Graphic Card 3070ti PLEASE EOOWO
          </p>
          <div className="w-full flex justify-center gap-4">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black text-black">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </main>
    </PageTransEffect>
  );
}
