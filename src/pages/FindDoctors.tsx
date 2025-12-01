import { MedicalCenterDirectory } from "../components/features/FindDoctors/MedicalCenterDirectory";
import { SearchSection } from "../components/features/FindDoctors/SearchSection";
import { CTASection } from "../components/features/Home/CTASection";
import { FAQSection } from "../components/features/Home/FAQSection";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export const FindDoctors = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <MedicalCenterDirectory />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};
