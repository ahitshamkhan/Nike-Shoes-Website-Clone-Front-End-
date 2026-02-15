import TopHeader from './components/TopHeader/TopHeader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CallToAction from './components/CallToAction/CallToAction';
import ShoeCarousel from './components/ShoeCarousel/ShoeCarousel';
import CourtSection from './components/CourtSection/CourtSection';
import ShopByAthlete from './components/ShopByAthlete/ShopByAthlete';
import Basketball from './components/Basketball/Basketball';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import CategoryCards from './components/CategoryCards/CategoryCards';
import CustomizeSection from './components/CustomizeSection/CustomizeSection';
import GreatnessSection from './components/GreatnessSection/GreatnessSection';
import RedGirlsSection from './components/RedGirlsSection/RedGirlsSection';
import BrickCourtSection from './components/BrickCourtSection/BrickCourtSection';
import ShopKids from './components/ShopKids/ShopKids';
import NikeSymbolSection from './components/NikeSymbolSection/NikeSymbolSection';
import FooterBar from './components/FooterBar/FooterBar';
import FooterNav from './components/FooterNav/FooterNav';
import MainFooter from './components/MainFooter/MainFooter';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <TopHeader />
      <Navbar />
      <Hero />
      <CallToAction />
      <ShoeCarousel />
      <CourtSection />
      <ShopByAthlete />
      <Basketball />
      <FeaturedSection />
      <CategoryCards />
      <CustomizeSection />
      <RedGirlsSection />
      <GreatnessSection />
      <BrickCourtSection />
      <ShopKids />
      <NikeSymbolSection />
      <FooterBar />
      <FooterNav />
      <MainFooter />
    </div>
  );
}

export default App;