import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import About from "../../components/About";
import ServiceCards from "../../components/ServiceCards";
import LogoSlider from "../../components/LogoSlider"
import Mapa from "../../components/Mapa";
import Contacto from "../../components/Contacto";
import PortafolioWeb from "../../components/PortafolioWeb";
import Grid from "../../components/Grid";
import Flip from "../../components/Flip";

export default function Home() {
  return (
    <main>
      <section>
        <Stars />
        <Hero />
        <About />
        <ServiceCards />
        <Grid />
        <Flip />
        <PortafolioWeb />
        <LogoSlider />
        <Mapa />
        <Contacto />
      </section>
    </main>
  );
}