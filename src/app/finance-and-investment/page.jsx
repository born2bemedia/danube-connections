import FinanceApproach from "./_components/FinanceApproach";
import FinanceGaps from "./_components/FinanceGaps";
import FinanceHero from "./_components/FinanceHero";


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

export default function Finance() {
    return (
        <>
            <FinanceHero />
            <FinanceGaps />
            <FinanceApproach />
        </ >
    );
}