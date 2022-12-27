import { Montserrat } from "@next/font/google";
import FooterBase from "./FooterBase";
import FooterMain from "./FooterMain";
import Image from "next/image";
import background from "../../public/footer/background.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Footer = () => {
  return (
    <div className={`${montserrat.variable} font-sans mt-auto relative pt-48`}>
      <div className="absolute inset-0 bg-bgBlack -z-10">
        <Image
          src={background}
          alt="background"
          className="object-cover w-full h-full opacity-5"
          draggable={false}
        />
      </div>

      <div className="container">
        <FooterMain />
        <FooterBase />
      </div>
    </div>
  );
};

export default Footer;
