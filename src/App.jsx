import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navigation } from './components/navigation/Navigation';
import { About } from './components/About/About';
import { useIntersectionObservers } from './hooks/useIntersectionObservers';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {

  const hasAnimated = useIntersectionObservers();
  const showScrollTop = useScrollToTop();

  return (
    <div className='min-h-screen bg-white text-black'>
      <Navigation />
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated}/>
      <Skills hasAnimated={hasAnimated}/>
      <Contacts hasAnimated={hasAnimated}/>
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
};

export default App;