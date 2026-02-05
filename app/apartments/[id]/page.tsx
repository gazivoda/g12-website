import { notFound } from 'next/navigation';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { apartmentsByFloor } from '@/app/consts/consts';
import { ApartmentDetails } from '@/app/components/ApartmentDetails';


// Get all apartments
function getAllApartments() {
  return Object.values(apartmentsByFloor).flat();
}

// Find apartment by ID
function getApartmentById(id: string) {
  const allApartments = getAllApartments();
  return allApartments.find(apt => apt.id === id);
}

// Generate static params for all apartments
export async function generateStaticParams() {
  const allApartments = getAllApartments();
  return allApartments.map((apartment) => ({
    id: apartment.id,
  }));
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const apartment = getApartmentById(id);

  if (!apartment) {
    return {
      title: 'Apartman nije pronađen',
    };
  }

  return {
    title: `${apartment.name} - ${apartment.type} | G12 Crveni Krst`,
    description: `${apartment.type} apartman na ${apartment.floor === 0 ? 'prizemlju' : apartment.floor + '. spratu'}, ukupne površine ${apartment.totalArea} m².`,
  };
}

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const apartment = getApartmentById(id);

  // If apartment not found, show 404
  if (!apartment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ApartmentDetails id={id}/>
      </main>

      <Footer />
    </div>
  );
}
