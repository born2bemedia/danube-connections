import MarketingApproach from "./_components/MarketingApproach";
import MarketingGaps from "./_components/MarketingGaps";
import MarketingHero from "./_components/MarketingHero";


export const metadata = {
    title: "Business Solutions for Marketing and Professional Services | Danube Connections",
    description:
        "Danube Connections supports marketing and professional services companies by offering tailored solutions in supply chain optimization, talent acquisition, and strategic partnerships to drive business growth.",
    openGraph: {
        title: "Business Solutions for Marketing and Professional Services | Danube Connections",
        description:
            "Danube Connections supports marketing and professional services companies by offering tailored solutions in supply chain optimization, talent acquisition, and strategic partnerships to drive business growth.",
        images: "https://danubestrategic.com/images/meta.png",
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