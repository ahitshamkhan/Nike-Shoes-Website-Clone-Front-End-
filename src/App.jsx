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
      <GreatnessSection />
      
      {/* Placeholder for other components */}
      <main className={styles.mainContent}>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">All Phases Complete!</h2>
            <p className="text-gray-300">Nike-Inspired Website ✓</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;