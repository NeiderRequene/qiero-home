import Head from "next/head";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import Footer from "../../components/footer";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Qiero - Políticas de privacidad</title>
        <meta
          name="description"
          content="Qiero: Red social de servicios donde solucionas todo con un clic."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className={`w-full mt-4 "`}>
        <h2 className="text-center mb-8 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Políticas de privacidad
        </h2>

        <p className=" py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Bienvenido a Qiero. Valoramos tu privacidad y estamos comprometidos a
          proteger tus datos personales. Esta Política de Privacidad explica
          cómo recopilamos, utilizamos y protegemos tus datos cuando utilizas
          nuestra aplicación. Al utilizar Qiero, aceptas los términos de esta
          Política de Privacidad.
        </p>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Recopilación de Datos
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Cuando utilizas Qiero, recopilamos información que proporcionas
            voluntariamente, como tu nombre, dirección de correo electrónico y
            número de teléfono.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            También recopilamos información sobre tus pedidos, historial de
            compras y preferencias de usuario.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Utilizamos tecnologías de seguimiento para recopilar información
            sobre tu ubicación y actividad dentro de la aplicación.
          </li>
        </ul>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Uso de Datos
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Utilizamos tus datos para procesar pedidos, proporcionar servicios
            de transporte y mejorar tu experiencia en la aplicación.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Tus datos también se utilizan para fines de facturación y para
            comunicarnos contigo sobre tu cuenta.
          </li>
        </ul>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Protección de Datos
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Tu privacidad es importante para nosotros, y tomamos medidas para
            proteger tus datos de acceso no autorizado.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Trabajamos con proveedores de servicios de confianza que siguen
            prácticas de seguridad sólidas.
          </li>
        </ul>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Divulgación de Datos
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Podemos compartir tus datos con terceros, como proveedores de
            transporte y tiendas, para cumplir con tus pedidos y solicitudes.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            No venderemos ni compartiremos tus datos personales con fines
            publicitarios sin tu consentimiento.
          </li>
        </ul>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Consentimiento del Usuario
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Al utilizar Qiero, aceptas esta Política de Privacidad y otorgas tu
            consentimiento para la recopilación y uso de tus datos personales.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Puedes retirar tu consentimiento en cualquier momento, pero esto
            puede afectar tu capacidad para utilizar la aplicación.
          </li>
        </ul>
        <p className="font-bold py-4 text-lg text-gray-500  dark:text-gray-300">
          Cambios en la Política de Privacidad
        </p>
        <ul class="ml-5 list-disc">
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Esta Política de Privacidad puede actualizarse periódicamente para
            reflejar cambios en nuestras prácticas y servicios.
          </li>
          <li className=" text-lg text-gray-500  dark:text-gray-300">
            Te recomendamos revisar esta Política de Privacidad regularmente
            para estar al tanto de las actualizaciones.
          </li>
        </ul>
        <p className="py-4 text-lg text-gray-500  dark:text-gray-300">
          Si tienes alguna pregunta o preocupación sobre esta Política de
          Privacidad, no dudes en contactarnos.
        </p>
        <Footer />
      </Container>
    </>
  );
};

export default Privacy;
