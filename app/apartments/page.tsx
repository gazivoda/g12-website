import { Apartments } from "../components/Apartments";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dostupni stanovi | G12 Crveni Krst",
  description: "Pregledajte sve dostupne stanove u G12 kompleksu na Crvenom Krstu. Jednosobni, dvosobni, trosobni i cetvorosobni stanovi.",
};

export default function ApartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Apartments />
      </main>
      <Footer />
    </div>
  );
}
