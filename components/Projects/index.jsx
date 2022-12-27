import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import { Montserrat } from "@next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const projects = [
  {
    id: 1,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
  },
  {
    id: 2,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
  },
  {
    id: 3,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
  },
  {
    id: 4,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
  },
  {
    id: 5,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
  },
];

const Projects = () => {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <div className="container max-w-[960px]">
        <h2 className="section-title">Our latest projects</h2>
        <p className="section-description">Get to know our latest projects</p>
      </div>

      <Swiper
        effect={"coverflow"}
        pagination={{
          el: ".custom-projects-pagination",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return `<div><span style="font-size:40px" className='text-[40px]'>${current}</span> / <span>${total}</span></div>`;
          },
        }}
        navigation={{
          prevEl: ".projects-prev",
          nextEl: ".projects-next",
        }}
        loop={true}
        slidesPerView={1.3}
        centeredSlides={true}
        coverflowEffect={{
          rotate: -5,
          depth: 150,
          modifier: 2,
          stretch: -70,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative mt-24"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="bg-blue-400">
            <div className="pt-[40%]">
              <Image src={"/projects/1.jpg"} fill className="object-cover" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end px-20 py-11 text-shadow font-semibold text-[28px]">
              {project.title}
            </div>
          </SwiperSlide>
        ))}

        <div className="container flex items-center justify-between gap-8 py-4">
          <div className="w-20 custom-projects-pagination"></div>
          <div className="h-[1px] w-full bg-gradient-to-tl from-transparent via-white/40 to-transparent rounded-full flex-1"></div>
          <div className="flex gap-3 custom-projects-navigation">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 border rounded-full projects-prev"
            >
              <Image
                src={"/icons/chevron-left.svg"}
                width={9}
                height={5}
                alt="projects prev"
              />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 border rounded-full projects-next"
            >
              <Image
                src={"/icons/chevron-right.svg"}
                width={9}
                height={5}
                alt="projects prev"
              />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
