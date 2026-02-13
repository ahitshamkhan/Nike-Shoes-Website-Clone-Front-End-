import TopHeader from './components/TopHeader/TopHeader';
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <TopHeader />
      <Navbar />
      
      {/* Placeholder for other components */}
      <main className={styles.mainContent}>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Nike Frontend</h1>
            <p className="text-gray-300">Phase 1: Top Header Complete ✓</p>
            <p className="text-gray-300">Phase 2: Main Navbar Complete ✓</p>
            <p className="text-sm text-gray-400 mt-2">More components coming in next phases...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;