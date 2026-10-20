import { Box } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { CaseStudies } from './components/sections/CaseStudies';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Writing } from './components/sections/Writing';
import { Contact } from './components/sections/Contact';

// SEO and social meta tags live in index.html so crawlers that don't run JS still see them.
function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
