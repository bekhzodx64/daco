import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const FooterBase = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex items-center justify-between py-5 border-t sm:py-9 border-white/20">
      <p className="opacity-50 text-xs sm:text-[15px] w-full max-w-[150px] sm:max-w-none">
        {t("All terms are protected by privacy policy")}
      </p>
      <div>
        <a href="http://oks.uz/" target="_blank" rel="noreferrer">
          <Image src="/oks-logo.svg" width={122} height={32} alt="oks" />
        </a>
      </div>
    </footer>
  );
};

export default FooterBase;
