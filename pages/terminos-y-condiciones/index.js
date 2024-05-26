import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import Footer from "../../components/footer";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Qiero - Términos y Condiciones</title>
        <meta
          name="description"
          content="Qiero: Red social de servicios donde solucionas todo con un clic."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className={`w-full mt-4 "`}>
        <h2 className="text-center mb-8 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Términos y Condiciones
        </h2>

        <p className=" py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Antes de utilizar la aplicación Qiero, te recomendamos leer
          detenidamente los Términos y Condiciones. Al hacer uso de Qiero,
          aceptas cumplir con estos términos y las políticas mencionadas a
          continuación.
        </p>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          1. Uso de la Aplicación
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          1.1. Para utilizar Qiero, debes ser mayor de edad y cumplir con todas
          las leyes y regulaciones locales.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          1.2. Qiero se reserva el derecho de denegar el acceso o el uso de la
          aplicación a cualquier usuario en cualquier momento y por cualquier
          razón.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          2. Pedidos y Transporte
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.1. Los pedidos de productos y servicios a través de Qiero están
          sujetos a la disponibilidad y a los términos y condiciones de los
          proveedores individuales.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.2. Qiero no se hace responsable de la calidad, disponibilidad ni
          entrega de productos y servicios de terceros.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.3. Los usuarios deben proporcionar información precisa de ubicación
          y contacto al solicitar transporte. Recuerda que es importante
          mantener una comunicación efectiva con los proveedores para garantizar
          un servicio óptimo.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          3. Pago y Tarifas
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          3.1. Los usuarios deben abonar los productos y servicios solicitados a
          través de la aplicación utilizando los métodos de pago aceptados.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          3.2. Qiero se reserva el derecho de aplicar tarifas de servicio y
          otros cargos según corresponda1. Es importante que los usuarios estén
          al tanto de estas posibles tarifas para evitar sorpresas al realizar
          sus transacciones.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          4. Seguridad y Privacidad
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          4.1. Qiero se compromete a proteger la privacidad y seguridad de los
          datos de los usuarios. Para obtener más información, te invito a
          consultar nuestra{" "}
          <span className="font-bold">Política de Privacidad.</span> En ella
          encontrarás detalles sobre cómo manejamos la información personal y
          qué medidas tomamos para garantizar su confidencialidad.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          5. Responsabilidad y Exención de Responsabilidad
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          5.1. Qiero no se hace responsable de los productos y servicios
          ofrecidos por terceros y no garantiza su calidad ni seguridad.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          5.2. Los usuarios asumen la responsabilidad de su seguridad y
          comportamiento al utilizar la aplicación y al solicitar transporte. Es
          fundamental que los usuarios sean conscientes de su entorno y sigan
          las normas de seguridad para garantizar una experiencia positiva.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          6. Modificaciones a los Términos y Condiciones
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          6.1. Qiero se reserva el derecho de modificar estos{" "}
          <span className="font-bold"> Términos y Condiciones</span> en
          cualquier momento. Los cambios entrarán en vigencia una vez publicados
          en la aplicación. Es importante que los usuarios estén al tanto de las
          actualizaciones para comprender sus derechos y responsabilidades al
          utilizar nuestros servicios.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          7. Finalización de la Cuenta
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          7.1. <span className="font-bold">Qiero</span> puede suspender o cerrar
          la cuenta de un usuario en caso de incumplimiento de estos Términos y
          Condiciones o por cualquier otra razón.
        </p>
        <Footer />
      </Container>
    </>
  );
};

export default Terms;
