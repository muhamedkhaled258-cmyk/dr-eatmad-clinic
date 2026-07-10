import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import FloatingButtons from './components/FloatingButtons';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Results from './sections/Results';
import Videos from './sections/Videos';
import Clinic from './sections/Clinic';
import Location from './sections/Location';
import Booking from './sections/Booking';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Results />
        <Videos />
        <Clinic />
        <Location />
        <Booking />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
