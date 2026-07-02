import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
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

function App() {
  const description =
    'Sr. Full Stack & AI Engineer with 8+ years building software and solutions in legal-tech, healthcare, fintech, AI, and internal systems.';

  return (
    <>
      <Helmet>
        <title>Eric Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Eric Portfolio, Sr. Full Stack & AI Engineer" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eric Portfolio, Sr. Full Stack & AI Engineer" />
        <meta name="twitter:description" content={description} />
      </Helmet>

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
    </>
  );
}

export default App;
