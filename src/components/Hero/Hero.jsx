import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen ${styles.hero}`}>
      {/* Video Background */}
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/Screen Recording 2026-02-15 123838.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;