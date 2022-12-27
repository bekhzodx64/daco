import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const navLinks = [
  {
    id: 1,
    name: "About us",
    url: "about",
  },
  {
    id: 2,
    name: "Our service",
    url: "services",
  },
  {
    id: 3,
    name: "Our project",
    url: "project",
  },
  {
    id: 4,
    name: "Our advantages",
    url: "advantages",
  },
  {
    id: 5,
    name: "Contacts",
    url: "contacts",
  },
];

const Header = () => {
  return (
    <header
      className={`${montserrat.variable} font-sans py-4 text-sm sticky top-0 right-0 left-0 z-50 bg-bgBlack`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" priority width={154} height={44} alt="logo" />
        </Link>

        <div className="items-center hidden gap-20 lg:flex">
          <div>
            <nav>
              <ul className="flex items-center gap-7">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.url}`}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-12">
            <div>
              <a href="tel:+998881605555" className="flex items-center gap-1">
                <Image
                  src={"/icons/phone.svg"}
                  width={17}
                  height={17}
                  alt="phone"
                  priority
                />
                <span>+998 88 160 55 55</span>
              </a>
            </div>

            <div className="flex items-center px-5 py-4 font-medium uppercase border border-white/30 rounded-full gap-[10px] cursor-pointer">
              <Image
                src={"/flags/1.jpg"}
                width={22}
                height={14}
                alt="flag"
                priority
              />
              <div className="flex items-center gap-1">
                <span>eng</span>
                <Image
                  src={"/icons/chevron-down.svg"}
                  width={8}
                  height={4}
                  priority
                  alt="chevron down"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="p-1 rounded-lg bg-darkAccent lg:hidden"
        >
          <Image
            src={"/icons/hamburger-icon.svg"}
            width={30}
            height={30}
            priority
            alt="hamburger icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
