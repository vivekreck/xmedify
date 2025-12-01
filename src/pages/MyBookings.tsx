import { SearchSection } from "../components/features/MyBookings/SearchSection";
import { CTASection } from "../components/features/Home/CTASection";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { MedicalCenterDirectory } from "../components/features/MyBookings/MedicalCenterDirectory";

export const MyBookings = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <MedicalCenterDirectory />
      <CTASection />
      <Footer />
    </div>
  );
};
