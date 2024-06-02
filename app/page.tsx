import { CSSProperties } from "react";
import CreatureList from "./CreatureList";

export default async function Home() {
  await new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));

  const creatures = await fetch('https://api.tibiadata.com/v4/creatures').then((data) => data.json());
  const { creatures: { creature_list } }: { creatures: { creature_list: Creature[] } } = creatures;

  return (
    <main style={{ padding: "1rem", textAlign: "center", maxWidth: "1024px", marginInline: "auto" }}>
      <CreatureList creatureList={creature_list}></CreatureList>
    </main>
  )
}