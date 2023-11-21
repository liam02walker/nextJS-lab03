export default function page({ params }: { params: { games: string } }) {
  return (
    <div>
      <h1>Game: {params.games}</h1>
    </div>
  );
}
