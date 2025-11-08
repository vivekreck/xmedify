import { Header } from "../components/layout/Header";
import { HeroBanner } from "../components/features/Home/HeroBanner";
import { QuickAccess } from "../components/features/Home/QuickAccess";
import { PromotionalBanner } from "../components/features/Home/PromotionalBanner";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <QuickAccess />
      <PromotionalBanner />
    </div>
  );
};

export default Home;
