import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/beneficios.svg";
import serviceImg from "../public/img/servicios.svg";

const benefitOne = {
  title: "Tus beneficios",
  desc: "Qiero es la solución confiable que mejora tu calidad de vida.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Comodidad",
      desc: "Realiza pedidos y solicita transporte desde la comodidad de tu hogar o cualquier lugar, sin necesidad de desplazarte físicamente.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Ahorro de tiempo",
      desc: "Evita largas filas y desplazamientos innecesarios al hacer tus pedidos y solicitar transporte de manera rápida y eficiente.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Asistencia 24/7",
      desc: "Recibe soporte al cliente en cualquier momento, lo que te brinda la confianza de que siempre hay alguien disponible para ayudarte.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};
const services = {
  title: "Nuestros servicios",
  desc: "Desde pedidos de productos hasta transporte, todo en una sola aplicación.",
  image: serviceImg,
  bullets: [
    {
      title: "Pedidos de Productos",
      desc: "Permite a los usuarios realizar pedidos de una amplia variedad de productos, incluyendo alimentos, ropa, electrónicos, productos para el hogar y más, desde diversas tiendas y proveedores.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Transporte",
      desc: "Facilita la solicitud de transporte, ya sea en forma de viajes privados o compartidos, para moverse por la ciudad de manera segura y eficiente.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

export { benefitOne, services };
