import "@/styles/base.scss";
import "@/styles/insights.scss";
import InsightsHero from "./_components/InsightsHero";


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
    </>
  );
};

export default Insights;