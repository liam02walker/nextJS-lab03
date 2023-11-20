import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-1 items-center justify-between flex-col">
      <div className="p-[16px] rounded-xl max-w-[60%] max-h-[80%] flex flex-col justify-center items-center bg-white text-black font-bold">
        <h2>Best Games</h2>
        <ul>
          <li>Dark Frontier</li>
          <li>Virtual Pets</li>
        </ul>
        <p>Bias? No this isn't biased at all...</p>
        <Link href="/">Go back HOME</Link>
      </div>
    </main>
  );
}
