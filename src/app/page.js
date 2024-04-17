import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import About from "../../components/About";
import ServiceCards from "../../components/ServiceCards";
import Portafolio from "../../components/Portafolio";
import LogoSlider from "../../components/LogoSlider"
import Mapa from "../../components/Mapa";
import Contacto from "../../components/Contacto";
import PortafolioWeb from "../../components/PortafolioWeb";
import Portafolio2 from "../../components/Portafolio2"

export default function Home() {
  return (
    <main>
      <section>
        <Stars />
        <Hero />
        <About />
        <ServiceCards />
        <Portafolio />
        <PortafolioWeb />
        <Portafolio2 />
        <LogoSlider />
        <Mapa />
        <Contacto />
      </section>
    </main>
  );
}