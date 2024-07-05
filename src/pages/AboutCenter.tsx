import "@/styles/aboutCenter.scss";
import Carusel from "@/components/shared/Carusel";
import { Button } from "@/components/ui/button";
import pattern1 from "@/assets/pattern-1.svg";
import pattern2 from "@/assets/pattern-2.svg";
import pattern3 from "@/assets/pattern-3.svg";
import pattern4 from "@/assets/pattern-4.svg";
import pattern5 from "@/assets/pattern-5.svg";
import { cosmeticTreatments, therapyList, treatments } from "@/constants";

function AboutCenter() {
  return (
    <>
      <div className="bg-custom-palePink">
        <div className="container">
          <Carusel />
        </div>
      </div>
      <div className="container py-14">
        <div className="flex justify-between items-center mb-[42px]">
          <h4 className="font-manrope text-[32px] font-semibold text-custom-slateGray">
            Услуги центра
          </h4>
          <Button variant={"outline"} className=" text-custom-slateGray">
            Все услуги
          </Button>
        </div>
        <div className="grid grid-flow-col gap-8">
          <div className="row-span-4  service-card relative  p-[31px] rounded-3xl  shadow-custom bg-custom-softPink">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Аппаратная 1
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>
            <div className="service-card__body">
              <ul>
                {therapyList.map((item, index) => (
                  <li
                    className="font-manrope mb-3 last:mb-0 font-extralight text-custom-slateGray text-lg"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0">
              <img src={pattern1} alt="pattern" />
            </div>
          </div>
          <div className="row-span-2  service-card relative   p-[31px] rounded-3xl  shadow-custom bg-custom-pureWhite">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Инъекционная
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>
            <div className="service-card__body">
              <ul>
                {cosmeticTreatments.map((item, index) => (
                  <li
                    className="font-manrope mb-3 last:mb-0 font-extralight text-custom-slateGray text-lg"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0">
              <img src={pattern2} alt="pattern" />
            </div>
          </div>
          <div className="row-span-2 service-card relative   p-[31px] rounded-3xl  shadow-custom bg-custom-pureWhite">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Лазерная
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>
            <div className="absolute right-0 top-0">
              <img src={pattern4} alt="pattern" />
            </div>
          </div>
          <div className="row-span-2 service-card relative   p-[31px] rounded-3xl  shadow-custom bg-custom-pureWhite">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Эстетическая
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>
            <div className="service-card__body">
              <ul>
                {treatments.map((item, index) => (
                  <li
                    className="font-manrope mb-3 last:mb-0 font-extralight text-custom-slateGray text-lg"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 top-0">
              <img src={pattern3} alt="pattern" />
            </div>
          </div>
          <div className="row-span-2 service-card relative  p-[31px] rounded-3xl  shadow-custom bg-custom-pureWhite">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Мужская
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>

            <div className="absolute right-0 top-0">
              <img src={pattern5} alt="pattern" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCenter;
