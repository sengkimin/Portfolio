import HeroSection from './components/Home';
import AboutSection from './components/About';
import Footer from './components/ Footer';
import EducationTimeline from './components/Education'
import ContactPage from './components/contact'
import  ProjectsSection from './components/Projects'

export default function Home() {
  return (
    <div className="bg-black">
     <HeroSection />
     <AboutSection />
     <EducationTimeline />
     < ProjectsSection/>
     <ContactPage />
     <Footer />
    </div>
  );
}

