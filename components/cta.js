import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-violet-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            ¿Preparado para disfrutar de Qiero?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            No dejes que tus necesidades cotidianas queden sin atender.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://play.google.com/store/apps/details?id=com.app_qiero"
            target="_blank"
            rel="noopener"
            className="inline-block py-2 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-full px-7 lg:px-10 lg:py-3 "
          >
            Descárgalo gratis!
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
