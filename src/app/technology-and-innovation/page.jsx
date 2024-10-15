import TechApproach from "./_components/TechApproach";
import TechGaps from "./_components/TechGaps";
import TechHero from "./_components/TechHero";


export const metadata = {
    title: "Business Solutions for Technology and Innovation | Danube Connections",
    description:
        "Danube Connections helps technology and innovation companies grow by providing supply chain optimization, investment opportunities, and strategic partnerships tailored to the tech industry.",
    openGraph: {
        title: "Business Solutions for Technology and Innovation | Danube Connections",
        description:
            "Danube Connections helps technology and innovation companies grow by providing supply chain optimization, investment opportunities, and strategic partnerships tailored to the tech industry.",
        images: "https://danubestrategic.com/images/meta.png",
    },
};

export default function Tech() {
    return (
        <>
            <TechHero />
            <TechGaps />
            <TechApproach />
        </ >
    );
}