'use client';

import { CSSProperties, useState } from "react";
import SearchBar from "./SearchBar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CreatureList({ creatureList }: { creatureList: Creature[] }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    const sectionStyle: CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        rowGap: "2em",
        columnGap: "2em",
    };

    const childrenStyles: CSSProperties = {
        flexGrow: "1",
        flexBasis: "150px",
        height: "160px",

        // To balance one-line and two-lines creature names
        display: "grid",
        gridTemplateRows: "1fr 1fr",
    }

    const query = searchParams.get('query');
    const initialFilteredList = query ? creatureList.filter((e) => e.name.toLowerCase().match(query)) : creatureList;

    const [filteredList, setFilteredList] = useState(initialFilteredList);

    function filterList(event: any) {
        const params = new URLSearchParams(searchParams);
        const searchValue = event.target.value.toLowerCase();
        
        if (searchValue == "") {
            setFilteredList(creatureList);
            params.delete('query');

            replace(`${pathname}?${params.toString()}`);

            return;
        }

        params.set('query', searchValue);

        replace(`${pathname}?${params.toString()}`);

        const newList = creatureList.filter((e) => e.name.toLowerCase().match(searchValue));
        setFilteredList(newList);
    }

    return (
        <div>
            <SearchBar initialValue={query} onSearchInput={filterList}></SearchBar>
            <section style={sectionStyle}>
                {filteredList.map((e) => <article key={e.race} style={childrenStyles}>
                    <h3 style={{ fontWeight: "300" }}>{e.name}</h3>
                    <a href={"/creature/" + e.race}><img src={e.image_url} alt={"Image of a kind of Tibia creature: " + e.name} /></a>
                </article>)}
            </section>
        </div>
    )
}