import { CSSProperties } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    const monsters = Array(618).fill(0);

    const mainStyles: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: "2em",
        columnGap: "2em",
        padding: "1rem",
        maxWidth: "1024px",
        marginInline: "auto",
    }

    const childStyles: CSSProperties = {
        flexGrow: "1",
        flexBasis: "150px",
        height: "160px",
    }

    return (
        <main style={mainStyles}>
            {monsters.map((_, i) => <div key={i} style={childStyles}>
                <Skeleton height={160}></Skeleton>
            </div>)}
        </main>
    )
}