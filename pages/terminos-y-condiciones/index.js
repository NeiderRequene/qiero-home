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
          Por favor, lee detenidamente estos Términos y Condiciones antes de
          utilizar la aplicación Qiero. Al utilizar Qiero, aceptas cumplir con
          estos términos y las políticas mencionadas a continuación.
        </p>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          1. Uso de la Aplicación
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          1.1. Al utilizar Qiero, debes ser mayor de edad y cumplir con todas
          las leyes y regulaciones locales.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          1.2. Qiero se reserva el derecho de negar el acceso o el uso de la
          aplicación a cualquier usuario en cualquier momento y por cualquier
          razón.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          2. Pedidos y Transporte
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.1. Los pedidos de productos y servicios a través de Qiero están
          sujetos a disponibilidad y a los términos y condiciones de los
          proveedores individuales.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.2. Qiero no es responsable de la calidad, disponibilidad ni entrega
          de productos y servicios de terceros.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          2.3. Los usuarios son responsables de proporcionar información precisa
          de ubicación y contacto para solicitudes de transporte.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          3. Pago y Tarifas
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          3.1. Los usuarios deben pagar por los productos y servicios
          solicitados a través de la aplicación de acuerdo con los métodos de
          pago aceptados.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          3.2. Qiero puede aplicar tarifas de servicio y otros cargos según
          corresponda.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          4. Seguridad y Privacidad
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          4.1. Qiero se compromete a proteger la privacidad y seguridad de los
          datos de los usuarios. Consulta nuestra Política de Privacidad para
          obtener más información.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          5. Responsabilidad y Exención de Responsabilidad
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          5.1. Qiero no es responsable de los productos y servicios ofrecidos
          por terceros y no garantiza la calidad ni la seguridad de los mismos.
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          5.2. Los usuarios asumen la responsabilidad de su seguridad y
          comportamiento durante el uso de la aplicación y al solicitar
          transporte.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          6. Modificaciones a los Términos y Condiciones
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          6.1. Qiero se reserva el derecho de modificar estos Términos y
          Condiciones en cualquier momento. Los cambios entrarán en vigencia una
          vez publicados en la aplicación.
        </p>

        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          7. Finalización de la Cuenta
        </p>
        <p className="ml-5 text-lg text-gray-500  dark:text-gray-300">
          7.1. Qiero puede suspender o cerrar la cuenta de un usuario en caso de
          incumplimiento de estos Términos y Condiciones o por cualquier otra
          razón.
        </p>
        <Footer />
      </Container>
    </>
  );
};

export default Terms;
