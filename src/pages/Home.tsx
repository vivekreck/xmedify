import { Header } from "../components/layout/Header";
import { HeroBanner } from "../components/features/Home/HeroBanner";
import { QuickAccess } from "../components/features/Home/QuickAccess";
import { PromotionalBanner } from "../components/features/Home/PromotionalBanner";
import { SpecializationGrid } from "../components/features/Home/SpecializationGrid";
import { DoctorGrid } from "../components/features/Home/DoctorGrid";
import { PatientCaringSection } from "../components/features/Home/PatientCaringSection";
import { NewsSection } from "../components/features/Home/NewsSection";
import { FacilitiesSection } from "../components/features/Home/FacilitiesSection";
import { FAQSection } from "../components/features/Home/FAQSection";
import { CTASection } from "../components/features/Home/CTASection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <QuickAccess />
      <PromotionalBanner />
      <SpecializationGrid />
      <DoctorGrid />
      <PatientCaringSection />
      <NewsSection />
      <FacilitiesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
