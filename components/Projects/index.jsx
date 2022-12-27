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
    location: "Tashkent, Almazar district, Karakamysh 1/3 house 35A",
  },
  {
    id: 2,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
    location: "Tashkent, Almazar district, Karakamysh 1/3 house 35A",
  },
  {
    id: 3,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
    location: "Tashkent, Almazar district, Karakamysh 1/3 house 35A",
  },
  {
    id: 4,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
    location: "Tashkent, Almazar district, Karakamysh 1/3 house 35A",
  },
  {
    id: 5,
    title: "Construction nine-storey Residential Building",
    image: "/projects/1.jpg",
    location: "Tashkent, Almazar district, Karakamysh 1/3 house 35A",
  },
];

const Projects = () => {
  return (
    <div className={`${montserrat.variable} font-sans pt-40`} id="project">
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
        speed={1000}
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
          <SwiperSlide key={project.id} className="group">
            <div className="pt-[40%]">
              <Image src={"/projects/1.jpg"} fill className="object-cover" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end px-20 transition-all py-11 group-hover:bg-black/40">
              <p className="text-sm font-medium transition-all delay-150">
                {project.location}
              </p>
              <p className="text-shadow font-semibold text-[28px]">
                {project.title}
              </p>
              <div className="flex items-center justify-between transition-all delay-300 mt-9">
                <button
                  type="button"
                  className="z-10 bg-black/50 relative pr-[6px] pt-[6px] pb-[6px] flex items-center gap-6 pl-5 rounded-full border border-white/30"
                >
                  <span>See available places</span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full accent-gradient">
                    <Image
                      src={"/icons/chevron-right.svg"}
                      width={9}
                      height={5}
                      alt={project.title}
                    />
                  </div>
                </button>

                <button
                  type="button"
                  className="relative z-10 flex items-center justify-center border rounded-full border-white/30 w-14 h-14"
                >
                  <Image
                    src={"/icons/full-screen.svg"}
                    width={18}
                    height={18}
                    alt={project.title}
                  />
                </button>
              </div>
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
                alt="projects next"
              />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
