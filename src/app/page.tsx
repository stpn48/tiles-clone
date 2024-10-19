import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#B4E352] text-black w-screen h-screen items-center justify-center flex flex-col gap-4">
      <Image src="/tiles-card-icon.svg" width={84} height={84} alt="tilesIcon"></Image>
      <h1 className="text-4xl font-bold">Tiles</h1>
      <p className="text-xl">Match the elements and keep the chain going.</p>

      <Link href={"/game"} className="text-white rounded-full bg-black px-8 py-2">
        Play
      </Link>
    </div>
  );
}
