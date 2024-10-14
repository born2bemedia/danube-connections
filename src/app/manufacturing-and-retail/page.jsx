import ManuApproach from "./_components/ManuApproach";
import ManuGaps from "./_components/ManuGaps";
import ManuHero from "./_components/ManuHero";


export const metadata = {
    title: "",
    description:
        "",
    openGraph: {
        title: "",
        description:
            "",
        images: "",
    },
};

export default function Manu() {
    return (
        <>
            <ManuHero />
            <ManuGaps />
            <ManuApproach />
        </ >
    );
}