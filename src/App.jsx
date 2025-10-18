import { useEffect } from 'react'
import './App.css'
import BannerSection from './components/Baneer'
import DentalProgram from './components/DentalProgram'
import Footer from './components/Footer'
import FooterBanner from './components/FooterBanner'
import HelpCommunity from './components/HelpCommunity'
import Invest from './components/Invest'
import Language from './components/Language'
import MBBSInfo from './components/MBBSInfo'
import Navbartop from './components/Navbartop'
import NewsGPT from './components/NewsGPT'
import StudyOptions from './components/StudyOptions'
import Techarts from './components/Techarts'
import TestimonialSection from './components/TestimonialSection'
import WhatsAppButton from './components/WhatsAppButton'
import AdPopup from './components/AdPopup '

function App() {
  
  // Auto-scroll to section when page loads with hash in URL
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      
      if (!hash) return;
      
      const elementToScroll = document.getElementById(hash.replace("#", ""));

      if (!elementToScroll) return;

      setTimeout(() => {
        window.scrollTo({
          top: elementToScroll.offsetTop - 80,
          behavior: "smooth"
        });
      }, 100);
    };

    scrollToHashElement();
    
    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHashElement);
    return () => window.removeEventListener("hashchange", scrollToHashElement);
  }, []);

  return (
    <div className='total'>
       <AdPopup />
      <Navbartop />
      <BannerSection />
      
      <div id='tech'>
        <Techarts />
      </div>
      
      <div id='mbbs'>
        <MBBSInfo />
      </div>
      
      <div id='study'>
        <StudyOptions/>
      </div>

      <div id='language'>
        <Language />
      </div>
           
      <div id='work'>
        <HelpCommunity />
      </div>
      
      <div id='invest'>
        <Invest/>
      </div>
      
      <NewsGPT />
      <TestimonialSection />
      <Footer />
      <FooterBanner/>
      <WhatsAppButton />
    </div>
  )
}

export default App
