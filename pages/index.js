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
        <span className="font-bold">Qiero</span> es una innovadora plataforma
        de comercio digital que trasciende horarios y fronteras. Ya sea que
        enfrentes un desafío o poseas la solución, esta aplicación conecta a
        individuos para resolver conjuntamente problemas cotidianos o complejos.
        Ofrece una ventana a nuevas posibilidades para enriquecer tus
        conocimientos y fortalecer tu economía, transformando tu vida.
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        sectionId="servicios"
        pretitle="Servicios"
        title="Conoce los servicios que te ofrecemos"
      >
        <span className="font-bold">Qiero</span> ofrece una amplia gama de
        servicios diseñados para simplificar tu vida. Desde realizar pedidos de
        productos y servicios, hasta acceder a un transporte seguro y eficiente,
        nuestra aplicación te brinda comodidad, seguridad y personalización.
      </SectionTitle>
      <Benefits imgPos="right" data={services} />

      <SectionTitle
        sectionId="testimonios"
        pretitle="Testimonios"
        title="Esto es lo que nuestros clientes dijeron"
      >
        Descubre lo que nuestros clientes están diciendo sobre su experiencia
        con nosotros. Lee sus testimonios reales y únete a la comunidad de
        satisfacción garantizada.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        sectionId="preguntas-frecuentes"
        pretitle="FAQ"
        title="Preguntas frecuentes"
      >
        En esta sección, encontrarás información detallada y soluciones para tus
        consultas sobre el funcionamiento de Qiero
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
