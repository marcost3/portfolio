import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import ProjectSection from './components/ProjectSection';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Certificates/>
      <ProjectSection />
      <ContactForm/>
    </>
  );
}

export default App;
