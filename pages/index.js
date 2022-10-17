import Layout from "../components/Layout/Layout";
import MainSection from "../components/Featured";
import NationalNews from "../components/NationalNews";
import Videos from "../components/Videos";
import FashionAndCulture from "../components/FashionAndCulture";
import InternationalAndVariousFacts from "../components/InternationalAndVariousFacts";
import LifestyleAndHoroscope from "../components/LifestyleAndHoroscope";
import SportAndEconomy from "../components/SportAndEconomy";

export default function Home() {
  return (
    <Layout>
      <MainSection />
      <NationalNews />
      <Videos />
      <FashionAndCulture />
      <InternationalAndVariousFacts />
      <LifestyleAndHoroscope />
      <SportAndEconomy />
    </Layout>
  );
}
