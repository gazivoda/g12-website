import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt | G12",
  description: "Kontaktirajte nas za više informacija o stanovima u zgradi G12.",
};

export default function Page() {
  return <ContactPage />;
}
