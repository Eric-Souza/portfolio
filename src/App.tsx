import { Box } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { CaseStudies } from './components/sections/CaseStudies';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { NextSectionButton } from './components/ui/NextSectionButton';
import { AnimatedBackground } from './components/ui/AnimatedBackground';

// SEO and social meta tags live in index.html so crawlers that don't run JS still see them.
function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <NextSectionButton />
    </Box>
  );
}

export default App;
