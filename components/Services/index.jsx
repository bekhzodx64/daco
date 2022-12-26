import { Montserrat } from "@next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const services = [
  { id: 1, title: "Design constructions", icon: "/icons/services/1.svg" },
  {
    id: 2,
    title: "Installation of engineering network",
    icon: "/icons/services/2.svg",
  },
  { id: 3, title: "Construction works ", icon: "/icons/services/3.svg" },
  { id: 4, title: "Interior finishing works", icon: "/icons/services/4.svg" },
  { id: 5, title: "Commissioning of equipment", icon: "/icons/services/5.svg" },
  {
    id: 6,
    title: "Video surveilliance of during construction",
    icon: "/icons/services/6.svg",
  },
];

const Services = () => {
  return (
    <div className={`${montserrat.variable} font-sans container space-y-14`}>
      <div>
        <h2 className="section-title">Our services</h2>
        <p className="section-description">
          Our company offers you comfortable and beautiful houses
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div>
          <div className="px-10 rounded-[20px] accent-gradient py-11 max-w-xs mx-auto">
            <h3 className="text-2xl font-semibold">
              We offer our high quality services
            </h3>
            <p className="text-[15px] opacity-60 mt-4">
              We provide a single point of contact, saving you both time and
              money. Our professional team is supported by dedicated engineering
              resources so we can offer the following services:
            </p>

            <button
              type="button"
              className="text-[15px] flex items-center w-full justify-between border p-5 rounded-full mt-8"
            >
              <span>Leave an application</span>
              <Image
                src={"/icons/chevron-right.svg"}
                width={15}
                height={15}
                alt="chevron"
              />
            </button>
          </div>
        </div>

        <div className="grid items-start flex-1 w-full grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 place-items-center h-min">
          {services.map((service) => (
            <div className="max-w-[215px]">
              <div className="flex flex-col gap-5 text-center">
                <div className="border w-[86px] h-[86px] flex items-center justify-center mx-auto rounded-2xl">
                  <Image
                    src={`${service.icon}`}
                    width={40}
                    height={40}
                    alt="services"
                  />
                </div>
                <p className="leading-tight text-[15px] md:text-lg">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
