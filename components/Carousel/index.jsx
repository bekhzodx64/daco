import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "/carousel/1.jpg",
  },
  {
    id: 2,
    url: "/carousel/2.jpg",
  },
  {
    id: 3,
    url: "/carousel/3.jpg",
  },
  {
    id: 4,
    url: "/carousel/4.jpg",
  },
];

const Carousel = () => {
  return (
    <div className="space-y-[10px] relative">
      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={30000}
        freeMode={true}
        centeredSlides={true}
        allowTouchMove={false}
        slidesPerView={2.5}
        spaceBetween={10}
        className="relative timing"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative pt-[45%]">
              <Image
                src={`${item.url}`}
                fill
                quality={100}
                alt={`${item.id}`}
                blurDataURL={`${item.url}`}
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: false,
        }}
        speed={30000}
        freeMode={true}
        centeredSlides={true}
        slidesPerView={2.5}
        allowTouchMove={false}
        spaceBetween={10}
        className="relative timing"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative pt-[45%]">
              <Image
                src={`${item.url}`}
                fill
                quality={100}
                alt={`${item.id}`}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
