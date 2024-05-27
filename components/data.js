import {
  ShoppingCartIcon,
  TruckIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/beneficios.svg";
import serviceImg from "../public/img/servicios.svg";

const benefitOne = {
  title: "Tus beneficios",
  desc: "Qiero es la solución confiable que mejora tu calidad de vida.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Conexión entre personas",
      desc: "Qiero enlaza a individuos que enfrentan desafíos o tienen soluciones para compartir. Puedes conectarte con personas afines y colaborar para resolver problemas cotidianos o complejos.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Flexibilidad horaria y geográfica",
      desc: "La aplicación no tiene restricciones de horario ni fronteras geográficas. Puedes acceder a ella en cualquier momento y desde cualquier lugar.",
      icon: <GlobeAmericasIcon />,
    },
    {
      title: "Ampliación de conocimientos",
      desc: "Qiero ofrece oportunidades para aprender y crecer. Puedes descubrir nuevas perspectivas, habilidades y conocimientos al interactuar con otros usuarios.",
      icon: <PresentationChartBarIcon />,
    },
    {
      title: "Mejora económica",
      desc: "Al resolver retos y compartir soluciones, puedes generar ingresos adicionales. Qiero puede ser una fuente de oportunidades para mejorar tu economía personal.",
      icon: <PresentationChartLineIcon />,
    },
    {
      title: "Transformación personal",
      desc: "Al participar en la comunidad de Qiero, puedes experimentar un cambio positivo en tu vida. Desde pequeños logros hasta grandes avances, la aplicación puede ser un catalizador para el crecimiento personal.",
      icon: <RocketLaunchIcon />,
    },
  ],
};
const services = {
  title: "Nuestros servicios",
  desc: "Desde pedidos de productos hasta transporte, todo en una sola aplicación.",
  image: serviceImg,
  bullets: [
    {
      title: "Pedidos de Productos y servicios",
      desc: "Nuestra aplicación permite a los usuarios realizar pedidos de una amplia variedad de productos y servicios de todo tipo, incluyendo alimentos, ropa, electrónicos, artículos para el hogar y más.",
      icon: <ShoppingCartIcon />,
    },
    {
      title: "Pedido de transporte",
      desc: "El servicio de transporte facilita la solicitud de viajes privados o compartidos para moverse por la ciudad de manera segura y eficiente.",
      icon: <TruckIcon />,
    },
  ],
};

export { benefitOne, services };
