import "@/styles/aboutCenter.scss";
import Carusel from "@/components/shared/Carusel";
import { Button } from "@/components/ui/button";
import pattern1 from "@/assets/pattern-1.svg";
import pattern2 from "@/assets/pattern-2.svg";
import pattern3 from "@/assets/pattern-3.svg";
import pattern4 from "@/assets/pattern-4.svg";
import pattern5 from "@/assets/pattern-5.svg";
import clinic from "@/assets/imgs/clinic.png";
import tecnoIcon from "@/assets/c-tech.svg";
import eyesIcon from "@/assets/c-eyes.svg";
import clockIcon from "@/assets/c-clock.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {
  cosmeticTreatments,
  specialists,
  therapyList,
  treatments,
} from "@/constants";

import "swiper/css";
import "swiper/css/navigation";

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
        <div className="grid grid-flow-col gap-8 mb-14">
          <div className="row-span-4 flex flex-col justify-center  service-card relative  p-[31px] rounded-3xl  shadow-custom bg-custom-softPink">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-cormorant mb-[-9px] italic font-semibold text-[28px] text-custom-slateGray">
                Аппаратная 1
              </span>
              <span className="font-manrope  font-semibold text-[20px] text-custom-slateGray">
                косметология
              </span>
            </div>
            <div className="service-card__body ">
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
      <div className="bg-custom-lightGray pt-[88px] pb-[157px] mb-[158px]">
        <div className="container relative ">
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h3 className="flex flex-col mb-[35px] font-cormorant leading-1 italic font-semibold text-[44px] text-custom-slateGray">
                Центр косметологии
                <span className="font-manrope leading-none not-italic font-semibold text-[32px] text-custom-slateGray">
                  Клиники Екатерининская
                </span>
              </h3>
              <p className="font-manrope mb-[42px]  last:mb-0 font-extralight text-custom-slateGray text-lg">
                В косметологии Клиники Екатерининская работают только
                врачи-дерматокосметологи и трихологи. Поэтому мы гарантируем
                профессиональный подход и только самое качественное выполнение
                услуг. К вашим услугам лазерная и инъекционная косметология,
                аппаратные методики, профессиональный уход за кожей.
              </p>
              <Button size={"lg"}>О Центре</Button>
            </div>
            <div>
              <img src={clinic} alt="clinic" />
            </div>
          </div>
          <div className="flex gap-[22px] justify-between rounded-3xl absolute bottom-[-225px] w-full p-8 bg-custom-pureWhite">
            <div className="flex gap-5 pr-3 w-max border-r-2">
              <div>
                <img src={tecnoIcon} alt="icon" />
              </div>
              <div className="">
                <span className="font-manrope text-xl font-extralight text-custom-slateGray">
                  Передовые технологии
                </span>
                <p className="font-manrope mt-[23px]  font-extralight text-base text-custom-slateGray">
                  Используем только оригинальные сертифицированные аппараты и
                  препараты
                </p>
              </div>
            </div>
            <div className="flex gap-5 pr-3 w-max border-r-2">
              <div>
                <img src={eyesIcon} alt="icon" />
              </div>
              <div className="">
                <span className="font-manrope text-xl font-extralight text-custom-slateGray">
                  Сохраняем конфиденциальность
                </span>
                <p className="font-manrope  mt-[23px]  font-extralight text-base text-custom-slateGray">
                  Бережно относимся к персональной информации пациентов
                </p>
              </div>
            </div>
            <div className="flex pr-3 gap-5 w-max">
              <div>
                <img src={clockIcon} alt="icon" />
              </div>
              <div className="">
                <span className="font-manrope text-xl font-extralight text-custom-slateGray">
                  Ценим ваше время
                </span>
                <p className="font-manrope  mt-[23px]  font-extralight text-base text-custom-slateGray">
                  Персональный менеджер запишет на удобный день и ответит на
                  вопросы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between items-center mb-[42px]">
          <h4 className="font-manrope text-[32px] font-semibold text-custom-slateGray">
            Наши специалисты
          </h4>
          <Button variant={"outline"} className=" text-custom-slateGray">
            Все специалисты
          </Button>
        </div>
        <div className="h-[445px] relative pb-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper h-full"
          >
            {specialists.map((item) => (
              <SwiperSlide className="relative  flex items-end  rounded-3xl bg-custom-radial py-[38px] px-[32px]">
                <div className="absolute flex justify-center  z-10 inset-0  ">
                  <img className="w-max" src={item.img} alt="specialist" />
                </div>
                <div className="z-20">
                  <h6 className="font-manrope mb-[12px] text-pretty text-[20px] font-semibold text-custom-slateGray">
                    {item.fullname}
                  </h6>
                  <p className="font-manrope text-[18px] font-extralight text-custom-slateGray">
                    {item.position}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </>
  );
}

export default AboutCenter;
