import { Montserrat } from "@next/font/google";
import FooterBase from "./FooterBase";
import FooterMain from "./FooterMain";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const Footer = () => {
  return (
    <div className={`${montserrat.variable} font-sans container mt-auto`}>
      <FooterMain />
      <FooterBase />
    </div>
  );
};

export default Footer;
