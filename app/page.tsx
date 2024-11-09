// app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';      // Updated to About.tsx
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';


export default function Home() {
  return (
      <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
     
    </div>
  );
}
