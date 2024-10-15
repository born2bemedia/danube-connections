import "@/styles/base.scss";
import "@/styles/insights.scss";
import InsightsHero from "./_components/InsightsHero";
import InsightsMain from "./_components/InsightsMain";


export const metadata = {
  title: "Market Insights | Danube Connections",
  description:
    "Explore in-depth market research and business insights across various industries. Stay informed with the latest reports and trends from Danube Connections.",
  openGraph: {
    title: "Market Insights | Danube Connections",
    description:
      "Explore in-depth market research and business insights across various industries. Stay informed with the latest reports and trends from Danube Connections.",
    images: "https://danubestrategic.com/images/meta.png",
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