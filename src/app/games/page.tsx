import Link from "next/link";

type gamesSearchQuery = {
  sortBy: string;
};

type gamesType = {
  name: string;
  id: number;
};

const gamesArr: gamesType[] = [
  {
    name: "Dark Frontier",
    id: 0,
  },
  {
    name: "Virtual Pets",
    id: 1,
  },
];

function compareGames(game1: gamesType, game2: gamesType) {
  if (game1.name < game2.name) {
    return -1;
  } else if (game1.name < game2.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function page({ searchParams }: { searchParams: gamesSearchQuery }) {
  let sortedGames = [...gamesArr];

  if (searchParams.sortBy === "asc") {
    sortedGames.sort(compareGames);
  } else if (searchParams.sortBy === "desc") {
    sortedGames.sort(compareGames).reverse();
  }

  return (
    <main className="flex flex-1 items-center justify-between flex-col">
      <div className="p-[16px] rounded-xl max-w-[60%] max-h-[80%] flex flex-col justify-center items-center bg-white text-black font-bold">
        <h2>Best Games</h2>
        <br />
        <Link href="/games">REMOVE SORT</Link>
        <br />
        <Link href="/games?sortBy=asc">SORT ASCENDING</Link>
        <br />
        <Link href="/games?sortBy=desc">SORT DESCENDING</Link>
        <br />
        <br />
        <ul>
          {sortedGames.map((game) => {
            return (
              <li>
                +<Link href={`/games/${game.name.toLowerCase()}`}>{game.name}</Link>
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <p>Bias? No this isn't biased at all...</p>
        <Link href="/">Go back HOME</Link>
      </div>
    </main>
  );
}
