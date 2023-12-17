import Image from "next/image";
import Container from "./container";
import qieroImg from "../public/img/app_qiero.png";
import AppleIcon from "./Icons/AppleIcon";
import GoogleIcon from "./Icons/GoogleIcon";

const Hero = () => {
  return (
    <section id="home">
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Lo que quieras con <span className="text-violet-500">Qiero</span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Red social de servicios donde solucionas todo con un clic.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.app_qiero"
                target="_blank"
                rel="noopener"
                className="bg-indigo-500 px-8 py-2 rounded-full flex items-center space-x-2 font-medium text-white"
              >
                <GoogleIcon width="24" />
                <span>Play Store</span>
              </a>
              <a
                href="https://apps.apple.com/us/app/qiero/id6447472683"
                target="_blank"
                rel="noopener"
                className="bg-neutral-300 px-8 py-2 rounded-full flex items-center space-x-2 font-medium text-black"
              >
                <AppleIcon width="24" />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={qieroImg}
              width="516"
              height="516"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
