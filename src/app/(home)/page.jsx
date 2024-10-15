import HomeBest from "./_components/HomeBest";
import HomeHero from "./_components/HomeHero";
import HomeInsights from "./_components/HomeInsights";
import HomeReach from "./_components/HomeReach";
import HomeServices from "./_components/HomeServices";
import HomeText from "./_components/HomeText";
import HomeWork from "./_components/HomeWork";

export const metadata = {
  title: "Expert Solutions for Global Business Growth | Danube Connections",
  description:
    "Danube Connections offers expert business consulting, helping companies enhance operations, form strategic partnerships, and grow globally.",
  openGraph: {
    title: "Expert Solutions for Global Business Growth | Danube Connections",
    description:
      "Danube Connections offers expert business consulting, helping companies enhance operations, form strategic partnerships, and grow globally.",
    images: "https://danubestrategic.com/images/meta.png",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeText />
      <HomeServices />
      <HomeReach />
      <HomeWork /> 
      <HomeBest />
      <HomeInsights /> 
    </>
  );
}
