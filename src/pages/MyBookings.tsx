import { SearchSection } from "../components/features/MyBookings/SearchSection";
import { CTASection } from "../components/features/Home/CTASection";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export const MyBookings = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <CTASection />
      <Footer />
    </div>
  );
};
