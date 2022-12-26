import Image from "next/image";
import Link from "next/link";

const FooterMain = () => {
  return (
    <footer className="justify-between pb-[70px] lg:pb-32 lg:flex-row flex-col flex gap-[70px] lg:gap-5">
      <div className="flex flex-col items-center lg:items-start">
        <Link href="/" className="inline-block">
          <Image src={"/footer-logo.png"} width={230} height={64} alt="logo" />
        </Link>

        <p className="mx-auto mt-6 text-center footer-description lg:text-left lg:mx-0">
          DACO GROUP pays special attention to both construction issues and work
          with clients, providing an individual approach and thorough advice
          when choosing an apartment or business property.
        </p>

        <div className="flex flex-col items-center justify-center gap-10 lg:justify-start mt-9 md:flex-row">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#!">
                <Image
                  src={"/icons/instagram.svg"}
                  width={24}
                  height={24}
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <Image
                  src={"/icons/facebook.svg"}
                  width={24}
                  height={24}
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href="#!">
                <Image
                  src={"/icons/twitter.svg"}
                  width={24}
                  height={24}
                  alt="twitter"
                />
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="flex items-center gap-2 px-6 py-4 border rounded-xl border-white/40"
          >
            <Image
              src={"/icons/footer-phone.svg"}
              width={18}
              height={18}
              alt="call to us"
            />
            <p>Call to us</p>
          </button>
        </div>
      </div>

      <div className="gap-16 text-center lg:text-left lg:flex space-y-14 lg:space-y-0">
        <div className="space-y-8 lg:space-y-5">
          <h3 className="footer-title">Company</h3>
          <ul className="space-y-4 lg:space-y-5 footer-links">
            <li>About us</li>
            <li>Our service</li>
            <li>Our advantages</li>
            <li>Our projects</li>
          </ul>
        </div>
        <div className="space-y-8 lg:space-y-5">
          <h3 className="footer-title">Projects</h3>
          <ul className="space-y-4 lg:space-y-5 footer-links">
            <li>Completed</li>
            <li>Soon</li>
            <li>Future projects</li>
          </ul>
        </div>
        <div className="space-y-8 lg:space-y-5">
          <h3 className="footer-title">Contacts</h3>
          <ul className="space-y-4 lg:space-y-5">
            <li className="footer-contact">
              <Image
                src={"/icons/footer-mail.svg"}
                width={16}
                height={16}
                alt="mail"
              />
              <span className="footer-links">dacogroup@gmail.com</span>
            </li>
            <li className="footer-contact">
              <Image
                src={"icons/footer-phone.svg"}
                width={16}
                height={16}
                alt="phone"
              />
              <span className="footer-links">+998 88 160 55 55</span>
            </li>
            <li className="footer-contact">
              <Image
                src={"/icons/footer-location.svg"}
                width={16}
                height={16}
                alt="location"
                className="lg:translate-y-1 lg:h-min"
              />
              <span className="footer-links max-w-[290px] md:max-w-[212px]">
                Tashkent, Almazar district, Karakamysh 1/3 house 35A
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
