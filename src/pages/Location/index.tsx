import Map from '@/features/Map';
import Footer from '@/ui/Footer';
import OurLocation from '@/ui/OurLocation';

function Location() {
  return (
    <>
      <main>
        <Map />
        <OurLocation />
      </main>
      <Footer />
    </>
  );
}

export default Location;
