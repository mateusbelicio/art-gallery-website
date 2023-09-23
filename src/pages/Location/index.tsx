import Map from '@/features/Map';
import { MapProvider } from '@/features/Map/MapContext';
import Footer from '@/ui/Footer';
import OurLocation from '@/ui/OurLocation';

function Location() {
  return (
    <>
      <main>
        <MapProvider>
          <Map />
        </MapProvider>
        <OurLocation />
      </main>
      <Footer />
    </>
  );
}

export default Location;
