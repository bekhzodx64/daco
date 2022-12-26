import { Montserrat } from "@next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const advantages = [
  {
    id: 1,
    title: "Quality assurance",
    description:
      "We are confident in the high quality of the work performed and provide a full long-term guarantee",
    icon: "/icons/advantages/1.svg",
  },
  {
    id: 2,
    title: "Deadlines",
    description:
      "Strict control at each stage of work allows you to effectively meet the deadlines for the implementation of projects without loss of quality",
    icon: "/icons/advantages/2.svg",
  },
  {
    id: 3,
    title: "Work according to strict international standarts",
    description:
      "Allows you to achieve not only excellent aesthetic qualities during construction and repair, but also reliability, durability of the work performed",
    icon: "/icons/advantages/3.svg",
  },
  {
    id: 4,
    title: "A complex approach",
    description: "We use an integrated approach in solving the problem",
    icon: "/icons/advantages/4.svg",
  },
];

const Advantages = () => {
  return (
    <div className={`${montserrat.variable} font-sans container`}>
      <div>
        <h2 className="section-title">Our advantages</h2>
        <p className="section-description">
          Get to know the best aspects of our company
        </p>
      </div>

      <div className="grid lg:grid-cols-4 mt-[70px] gap-10 max-w-5xl mx-auto">
        {advantages.map((advantage, index) => (
          <div key={advantage.id}>
            <div className="flex flex-col gap-7">
              <Image
                src={`${advantage.icon}`}
                width={40}
                height={40}
                alt={advantage.title}
              />

              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">{advantage.title}</h2>
                <p className="text-sm leading-normal opacity-80">
                  {advantage.description}
                </p>
                <span className="text-[148px] text-accent/20 text-right lg:text-left advantage-number leading-none">
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
