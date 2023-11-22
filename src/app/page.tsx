import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-between flex-col">
      <div className="m-[8px] p-[16px] rounded-xl max-w-[40%] max-h-[80%] flex flex-col justify-center items-center bg-white text-black font-bold">
        <h2 className="text-lg pb-4">Liam Walker</h2>
        <p className="pb-2">My name is Liam Walker, and I am learning Tailwind for the first time (send me some help please...)</p>
        <p className="pb-2">Tailwind is probably useful, but I simply don't like it.</p>
        <p className="pb-2">I want my old CSS back</p>
      </div>
    </main>
  );
}
