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
    'Senior Full Stack Engineer and Tech Lead with 8+ years building software in legal-tech, healthcare, fintech, and AI.';

  return (
    <>
      <Helmet>
        <title>Eric Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Eric Portfolio, Senior Full Stack Engineer" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eric Portfolio, Senior Full Stack Engineer" />
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
