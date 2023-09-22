import About from '@/ui/About';
import Footer from '@/ui/Footer';
import Hero from '@/ui/Hero';

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
      </main>
      <Footer colorDark={true} />
    </>
  );
}

export default Home;
