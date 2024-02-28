import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import CarruselPortafolio from "../../components/CarruselPortafolio"
import Mapa from "../../components/Mapa";
import Contacto from "../../components/Contacto";

export default function Home() {
  return (
    <main>
      <section>
        {/* Stars */}
        <Stars />
        {/* Stars */}
        {/* Hero */}
        <Hero />
        {/* Hero */}
        <CarruselPortafolio />
        {/* Mapa */}
        <Mapa />
        {/* Mapa */}
        {/* Contacto */}
        <Contacto />
        {/* Contacto */}
      </section>
    </main>
  );
}