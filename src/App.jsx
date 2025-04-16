import './App.css'
import BannerSection from './components/Baneer'
import DentalProgram from './components/DentalProgram'
import Footer from './components/Footer'
import HelpCommunity from './components/HelpCommunity'
import Language from './components/Language'
import MBBSInfo from './components/MBBSInfo'
import Navbartop from './components/Navbartop'
import NewsGPT from './components/NewsGPT'
import StudyOptions from './components/StudyOptions'
import Techarts from './components/Techarts'
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <div className='total'>
      <Navbartop />

      <BannerSection />

      <div id='tech'>
        <Techarts />
      </div>

      <div id='mbbs'>
        <MBBSInfo />
      </div>

      <div id='study'>
        {/* <DentalProgram /> */}
        <StudyOptions/>
      </div>

      <div id='language'>
        <Language />
      </div>

      <div id='invest'>
        <NewsGPT />
      </div>

      <div id='work'>
        <HelpCommunity />
      </div>

      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default App
