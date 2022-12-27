import { useState } from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const services = [
  {
    id: 1,
    title: "Design constructions",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/1.svg",
  },
  {
    id: 2,
    title: "Installation of engineering network",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/2.svg",
  },
  {
    id: 3,
    title: "Construction works ",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/3.svg",
  },
  {
    id: 4,
    title: "Interior finishing works",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/4.svg",
  },
  {
    id: 5,
    title: "Commissioning of equipment",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/5.svg",
  },
  {
    id: 6,
    title: "Video surveilliance of during construction",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/6.svg",
  },
];

const Services = () => {
  const [service, setService] = useState({
    id: 1,
    title: "Design constructions",
    description:
      "We provide a single point of contact, saving you both time and money. Our professional team is supported by dedicated engineering resources so we can offer the following services:",
    icon: "/icons/services/1.svg",
  });

  return (
    <div
      className={`${montserrat.variable} font-sans container space-y-14 pt-60`}
      id="services"
    >
      <div>
        <h2 className="section-title">Our services</h2>
        <p className="section-description">
          Our company offers you comfortable and beautiful houses
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div>
          <div className="px-10 rounded-[20px] accent-gradient py-11 max-w-xs mx-auto">
            <h3 className="text-2xl font-semibold line-clamp-2">
              {service.title}
            </h3>
            <p className="text-[15px] opacity-60 mt-4 line-clamp-6">
              {service.description}
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
          {services.map((item) => (
            <div
              className="max-w-[215px] cursor-pointer"
              key={item.id}
              onClick={() => setService(item)}
            >
              <div className="flex flex-col gap-5 text-center">
                <div
                  className={`border w-[86px] h-[86px] flex items-center justify-center mx-auto rounded-2xl ${
                    service.id === item.id ? "active-service" : null
                  }`}
                >
                  <Image
                    src={`${item.icon}`}
                    width={40}
                    height={40}
                    alt="services"
                    className={
                      service.id === item.id
                        ? "grayscale mix-blend-color-dodge"
                        : null
                    }
                  />
                </div>
                <p
                  className={`leading-tight text-[15px] md:text-lg ${
                    service.id === item.id ? "font-medium" : null
                  }`}
                >
                  {item.title}
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
