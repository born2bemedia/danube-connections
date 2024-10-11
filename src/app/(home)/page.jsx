import HomeHero from "./_components/HomeHero";
import HomeReach from "./_components/HomeReach";
import HomeText from "./_components/HomeText";

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
      <HomeReach />
    </>
  );
}
