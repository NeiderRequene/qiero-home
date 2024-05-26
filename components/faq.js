import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                  <span>¿Cómo puedo descargar la aplicación Qiero?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  Puedes descargar la aplicación Qiero de forma gratuita desde
                  la tienda de aplicaciones de tu dispositivo móvil, ya sea la
                  &nbsp;
                  <span className="font-bold">
                    App Store para dispositivos iOS o Google Play para
                    dispositivos Android.
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                  <span>
                    ¿Cómo puedo realizar un pedido de productos en Qiero?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  Para realizar un pedido de productos, simplemente ingresa el
                  nombre del artículo que deseas y la tarifa que estás dispuesto
                  a pagar. Luego, presiona el botón 'Buscar' y espera a que un
                  Miembro Qiero acepte tu solicitud
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                  <span>
                    ¿Cómo funcionan las opciones de transporte en Qiero?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  Para solicitar transporte privado a través de Qiero, sigue
                  estos pasos:
                  <ol className="list-decimal list-inside mt-4">
                    <li>Selecciona tu ubicación de recogida y destino</li>
                    <li>Ingresa la tarifa que estás dispuesto a pagar</li>
                    <li>Confirma tu solicitud</li>
                    <li>Espera a que un conductor acepte tu solicitud</li>
                  </ol>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                  <span>¿Es seguro utilizar Qiero?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  En Qiero, la seguridad es nuestra prioridad. Todos los
                  conductores y proveedores de productos pasan por rigurosas
                  revisiones y verificaciones. Además, puedes rastrear tus
                  pedidos y viajes en tiempo real para mayor tranquilidad.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
