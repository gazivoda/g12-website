import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Building } from "./components/Building";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata  = {
  title: 'Kontakt | G12 Crveni Krst',
  description: 'Kontaktirajte nas za više informacija o G12 apartmanima na Crvenom Krstu.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Building />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
