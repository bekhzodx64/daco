import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Montserrat } from "@next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const infrastructures = [
  {
    id: 1,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 2,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 3,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 4,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 5,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 6,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
  {
    id: 7,
    title: "Construction nine-storey Residential Building",
    image: "/infrastructures/1.jpg",
  },
];

const Infrastructures = () => {
  return (
    <div className={`${montserrat.variable} font-sans `}>
      <div className="container max-w-[960px]">
        <h2 className="section-title">The most beautiful infrastructures</h2>
        <p className="section-description">
          You can see the wonderful and beautiful places and infrastructure near
          our completed houses
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        effect={"coverflow"}
        pagination={{
          el: ".custom-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return current + " / " + total;
          },
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        className="relative mt-24"
      >
        {infrastructures.map((infrastructure) => (
          <SwiperSlide key={infrastructure.id} className="py-10">
            <div className="w-full pt-[100%] relative group transition-all perspective">
              <Image
                src={infrastructure.image}
                quality={100}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-end py-12 text-lg font-semibold transition-all px-9 text-shadow group-hover:opacity-0">
                <p>{infrastructure.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-pagination accent-gradient"></div>
      </Swiper>
    </div>
  );
};

export default Infrastructures;
