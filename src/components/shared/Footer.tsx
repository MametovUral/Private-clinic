import logo from "@/assets/logo.svg";
import eyesIcon from "@/assets/c-eyes-foter.svg";

function Footer() {
  return (
    <footer className="bg-custom-slateGray">
      <div className="container py-14">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <img className="mb-[23px]" src={logo} alt="logo" />
            <div className="flex flex-col">
              <span className="font-manrope text-[13px] font-extralight text-custom-pureWhite">
                © 2023 «Клиника Екатерининская»
              </span>
              <a className="underline cursor-pointer font-manrope text-[13px] font-extralight text-custom-pureWhite">
                Лицензия №ЛО-23-01-014758 от 21 августа 2020 Правовые документы
              </a>
            </div>
          </div>
          <div className="w-[17%]">
            <ul className="flex gap-6 mb-[13px]">
              <li className="rounded-full size-10 bg-custom-lightGray "></li>
              <li className="rounded-full size-10 bg-custom-lightGray"></li>
              <li className="rounded-full size-10 bg-custom-lightGray"></li>
            </ul>
            <p className="font-manrope text-[13px] font-extralight text-custom-pureWhite">
              Имеются противопоказания. Необходима консультация специалиста
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px] cursor-pointer">
          <img src={eyesIcon} alt="eyes icon" />
          <p className="font-manrope text-[13px] font-extralight text-custom-pureWhite">
            Версия для слабовидящих
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
