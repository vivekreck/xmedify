import { Header } from "../components/layout/Header";
import { HeroBanner } from "../components/features/Home/HeroBanner";
import { QuickAccess } from "../components/features/Home/QuickAccess";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <QuickAccess />
    </div>
  );
};

export default Home;
