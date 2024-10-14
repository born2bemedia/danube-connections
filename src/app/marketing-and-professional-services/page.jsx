import MarketingApproach from "./_components/MarketingApproach";
import MarketingGaps from "./_components/MarketingGaps";
import MarketingHero from "./_components/MarketingHero";


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

export default function Marketing() {
    return (
        <>
            <MarketingHero />
            <MarketingGaps />
            <MarketingApproach />
        </ >
    );
}