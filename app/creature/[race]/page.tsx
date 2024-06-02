import './creature.css';

export default async function Creature({ params }: { params: { race: string }}) {
    type CreatureDetail = {
        name: string;
        description: string;
    }

    const data = await fetch(`https://api.tibiadata.com/v4/creature/${params.race}`).then((data) => data.json());
    const { creature }: { creature: CreatureDetail } = data;

    return (
        <main>
            <h1>{creature.name}</h1>
            <p>{creature.description}</p>
        </main>
    )
}