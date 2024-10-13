import HomeBest from "./_components/HomeBest";
import HomeHero from "./_components/HomeHero";
import HomeInsights from "./_components/HomeInsights";
import HomeReach from "./_components/HomeReach";
import HomeServices from "./_components/HomeServices";
import HomeText from "./_components/HomeText";
import HomeWork from "./_components/HomeWork";

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
