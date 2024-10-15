import "@/styles/base.scss";
import "@/styles/insights.scss";
import InsightsHero from "./_components/InsightsHero";
import InsightsMain from "./_components/InsightsMain";


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

const Insights = () => {
  return (
    <>
      <InsightsHero />
      <InsightsMain />
    </>
  );
};

export default Insights;