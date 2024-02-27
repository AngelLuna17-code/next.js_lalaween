import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import ServiceCards from "../../components/ServiceCards";
import SliderComponent from "../../components/SliderComponent";
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
        {/* ServiceCards */}
        <ServiceCards />
        {/* ServiceCards */}
        {/* Portafolio */}
        <SliderComponent />
        {/* Portafolio */}
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