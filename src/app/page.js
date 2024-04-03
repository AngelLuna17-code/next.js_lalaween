import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import About from "../../components/About";
import ServiceCards from "../../components/ServiceCards";
import LogoSlider from "../../components/LogoSlider"
import Mapa from "../../components/Mapa";
import Contacto from "../../components/Contacto";
import SliderComponent from "../../components/SliderComponent";

export default function Home() {
  return (
    <main>
      <section>
        <Stars />
        <Hero />
        <About />
        <ServiceCards />
        <SliderComponent />
        <LogoSlider />

        <Mapa />
        <Contacto />
      </section>
    </main>
  );
}