import TechApproach from "./_components/TechApproach";
import TechGaps from "./_components/TechGaps";
import TechHero from "./_components/TechHero";


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

export default function Home() {
    return (
        <>
            <TechHero />
            <TechGaps />
            <TechApproach />
        </ >
    );
}