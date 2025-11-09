import { Header } from "../components/layout/Header";
import { HeroBanner } from "../components/features/Home/HeroBanner";
import { QuickAccess } from "../components/features/Home/QuickAccess";
import { PromotionalBanner } from "../components/features/Home/PromotionalBanner";
import { SpecializationGrid } from "../components/features/Home/SpecializationGrid";
import { DoctorGrid } from "../components/features/Home/DoctorGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <QuickAccess />
      <PromotionalBanner />
      <SpecializationGrid />
      <DoctorGrid />
    </div>
  );
};

export default Home;
