import { Montserrat } from "@next/font/google";
import Image from "next/image";
import fog from "../../public/contact/fog.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const ContactUs = () => {
  return (
    <div className={`${montserrat.variable} font-sans relative`}>
      <div className="absolute top-0 left-0 right-0 -translate-y-1/3 -z-10">
        <Image
          src={fog}
          alt="fog"
          className="object-cover w-full h-full"
          draggable={false}
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 py-6 lg:flex-row px-14 contact-bg">
          <div className="max-w-sm">
            <h2 className="font-semibold text-[40px]">Contact us</h2>
            <p className="text-[15px] opacity-70">
              Get to know the best aspects of our company
            </p>
          </div>

          <form className="flex flex-col items-center w-full max-w-sm gap-5 lg:w-auto lg:max-w-none lg:flex-row">
            <input
              type="text"
              className="w-full lg:w-auto px-5 py-4 font-medium outline-none rounded-xl bg-accent/50 placeholder:text-white placeholder:opacity-40 text-[15px]"
              placeholder="Name"
            />

            <input
              type="tel"
              className="w-full lg:w-auto px-5 py-4 outline-none rounded-xl bg-accent/50 placeholder:text-white placeholder:opacity-40 font-medium text-[15px]"
              pattern="+[0-9]{3} ([0-9]{2}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="Phone number"
            />

            <button className="flex items-center py-1 pr-1 pl-6 border gap-[14px] rounded-full">
              <span>Send info</span>
              <div className="rounded-full button-icon-bg w-[42px] h-[42px] overflow-hidden flex items-center justify-center">
                <Image
                  src={"/icons/chevron-right.svg"}
                  width={10}
                  height={10}
                  alt="chevron"
                />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
