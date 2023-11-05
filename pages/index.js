import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, services } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Qiero - Lo que quieras con qiero</title>
        <meta
          name="description"
          content="Qiero: Tu solución todo en uno para pedidos y transporte. Haz pedidos y solicita transporte de forma fácil y segura con Qiero, la aplicación que simplifica tu vida cotidiana."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <Navbar />
      <Hero />

      <SectionTitle
        sectionId="beneficios"
        pretitle="Beneficios de Qiero"
        title="¿Por qué deberías usar Qiero?"
      >
        Qiero es una aplicación que te ofrece comodidad, variedad y seguridad en
        un solo lugar. Simplifica pedidos y transporte, ahorra tiempo, brinda
        opciones personalizadas y garantiza transacciones seguras.
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        sectionId="servicios"
        pretitle="Servicios"
        title="Conoce los servicios que te ofrecemos"
      >
        Qiero ofrece una gama completa de servicios diseñados para simplificar
        tu vida. Desde pedidos de productos a través de una variedad de tiendas
        hasta transporte seguro y eficiente, nuestra aplicación te brinda
        comodidad, seguridad y personalización.
      </SectionTitle>
      <Benefits imgPos="right" data={services} />

      <SectionTitle
        sectionId="testimonios"
        pretitle="Testimonios"
        title="Esto es lo que nuestros clientes dijeron"
      >
        Descubre lo que nuestros usuarios dicen sobre su experiencia con Qiero.
        Sus testimonios son la voz de la satisfacción y confianza que nuestra
        aplicación brinda a diario. ¡Lee lo que tienen que decir y únete a la
        comunidad de usuarios satisfechos!
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        sectionId="preguntas-frecuentes"
        pretitle="FAQ"
        title="Preguntas frecuentes"
      >
        Aquí, te proporcionamos información detallada y soluciones a tus
        consultas sobre el funcionamiento de Qiero
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
