import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAnimatedText from '../components/CardAnimatedText';
import Image from 'next/image';

const list = [
    {
        title: "DISEÑO DE MARCA",
        icon: [
            "/icons/LalaWeen-WEB-08.webp",
        ],
        sub: "Abarcamos el branding y la identidad corporativa de tu marca.",
        text: "Englobando una serie de elementos clave como la creación de su logotipo, desde su tipografía, figura, estilo y pantones que le brinden una esencia visual distintiva.",
        images: [
            "/DISEÑO DE MARCA/Mock up Tarjeta Estudio Arq Logotipo.webp",
            "/DISEÑO DE MARCA/Mock up Etiqueta Tanukiya_11zon_11zon.webp",
            "/DISEÑO DE MARCA/Mock up Gorra MJ.webp",
            "/DISEÑO DE MARCA/Mock up Hoja reciclada.webp",
            "/DISEÑO DE MARCA/Mock up Oficina-min.webp"
        ],
        bgColor: "rgba(0, 0, 0, 0.7)",
    },
    {
        title: "IDENTIDAD GRAFICA",
        icon: [
            "/icons/LalaWeen-WEB-09_1.webp",
        ],
        sub: "Diseñamos y definimos el aspecto visual de una marca.",
        text: "En base al logotipo, misión, visión y objetivo de la empresa, se realiza el diseño adecuado para impreso o digital de una manera que sea fácil de identificar para el espectador y logre relacionarlo con la marca.",
        images: [
            "/IDENTIDAD GRÁFICA/Mock up Branding_3_11zon.webp",
            "/IDENTIDAD GRÁFICA/Mock up hoja grabada_5_11zon.webp",
            "/IDENTIDAD GRÁFICA/Mock up Receta SoyTotalmenteKeto_6_11zon.webp",
            "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación A_7.webp",
            "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación B_8.webp",
            "/IDENTIDAD GRÁFICA/Mock up Tarjeta de presentación D_9.webp",
            "/IDENTIDAD GRÁFICA/Mouckup Triptico pizzopolis_10_11zon.webp",
            "/IDENTIDAD GRÁFICA/Mock up Bolsa de paja_1_11zon.webp",
            "/IDENTIDAD GRÁFICA/Mock up Bolsa de papel ConCafé_2.webp",
            "/IDENTIDAD GRÁFICA/Mock up caja_4_11zon.webp"
        ],
        bgColor: "rgba(0, 0, 0, 0.7)",
    },
    {
        title: "REDES SOCIALES Y DISEÑO WEB",
        icon: [
            "/icons/LalaWeen-WEB-10.webp",
        ],
        text: "Identificación del público objetivo, creación de contenido en redes sociales para construir relaciones sólidas, y facilitación de adquisiciones a través de una página web atractiva y amigable.",
        images: [
            "/REDES Y WEB/Mock up Tablet_4_11zon.webp",
            "/REDES Y WEB/Mock up Redes Sociales Dr José_1.webp",
            "/REDES Y WEB/Mock up Redes Sociales Dra Jaz_2_11zon.webp",
            "/REDES Y WEB/Mock up Redes Sociales Dra Marcela_3_11zon.webp",
            "/REDES Y WEB/Mock up Tablet1_5_11zon.webp",
            "/REDES Y WEB/Mock up WEB_6_11zon.webp",
        ],
        bgColor: "rgba(0, 0, 0, 0.7)",
    },
];

return (
    <section>
        <div className='container mx-auto'>
            <div className=''>
                {list.title}
                {list.icon}
                {list.sub}
                {list.icon}
                {list.text}
                <Image
                    className=''
                    src={list.Images}
                    height={0}
                    width={500}
                    alt='Servicios'
                />
            </div>
        </div>
    </section>
);

export default ServiceCards;