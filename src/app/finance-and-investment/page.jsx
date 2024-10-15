import FinanceApproach from "./_components/FinanceApproach";
import FinanceGaps from "./_components/FinanceGaps";
import FinanceHero from "./_components/FinanceHero";


export const metadata = {
    title: "Business Solutions for Finance and Investment | Danube Connections",
    description:
        " Danube Connections provides expert support to finance and investment firms, offering partnership development, market entry strategies, and tailored solutions for sustainable growth.",
    openGraph: {
        title: "Business Solutions for Finance and Investment | Danube Connections",
        description:
            " Danube Connections provides expert support to finance and investment firms, offering partnership development, market entry strategies, and tailored solutions for sustainable growth.",
        images: "https://danubestrategic.com/images/meta.png",
    },
};

export default function Finance() {
    return (
        <>
            <FinanceHero />
            <FinanceGaps />
            <FinanceApproach />
        </ >
    );
}