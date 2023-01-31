import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

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
  const { t } = useTranslation();

  return (
    <div className={`${montserrat.variable} font-sans pb-36 lg:pb-40 pt-20`}>
      <p className="font-semibold relative opacity-20 text-accent text-[80px] lg:text-[200px] lg:-mb-28 -z-10 whitespace-nowrap overflow-hidden">
        The most beautiful infrastructures
        <span className="absolute bottom-0 left-0 right-0 z-10 h-2/3 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></span>
      </p>

      <div className="container max-w-[960px] space-y-4 lg:space-y-0">
        <h2 className="section-title">
          {t("The most beautiful infrastructures")}
        </h2>
        <p className="section-description">
          {t(
            "You can see the wonderful and beautiful places and infrastructure near our completed houses",
          )}
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".custom-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return current + " / " + total;
          },
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          1360: {
            slidesPerView: 4,
            centeredSlides: true,
          },
        }}
        className="relative mt-11 xl:mt-24"
      >
        {infrastructures.map((infrastructure) => (
          <SwiperSlide key={infrastructure.id} className="py-10">
            {/* w-full pt-[100%] */}
            <div className="w-full pt-[100%] relative group transition-all perspective">
              <Image
                src={infrastructure.image}
                quality={100}
                fill
                alt={infrastructure.title}
                className="object-cover"
              />

              <div className="absolute inset-0 flex flex-col justify-end py-12 text-lg font-semibold transition-all px-9 text-shadow group-hover:opacity-0">
                <p>{t(infrastructure.title)}</p>
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
