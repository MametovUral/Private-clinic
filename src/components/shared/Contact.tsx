import { caruselItems } from "@/constants";
import contactImg from "@/assets/imgs/c-contact-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import vkIcon from "@/assets/c-vk.svg";
import mailIcon from "@/assets/c-mail.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/styles/contact.scss";

function Contact() {
  return (
    <>
      <div className="mb-14">
        <h4 className="font-manrope text-[32px] font-semibold text-custom-slateGray">
          Контакты
        </h4>
      </div>
      <div className="flex gap-8 mb-14 ">
        <div className="max-w-xl">
          <div className="rounded-3xl w-full shadow-custom bg-custom-softPink">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper rounded-3xl mySwiper-contact "
            >
              {caruselItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="rounded-3xl  bg-custom-palePink"
                >
                  <div>
                    <img className="w-full" src={contactImg} alt="img" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex w-full h-full flex-col gap-8">
          <div className="p-[35px] rounded-3xl  shadow-custom bg-custom-pureWhite">
            <div className="service-card__head flex flex-col mb-7">
              <span className="font-manrope  font-semibold text-[32px] text-custom-slateGray">
                Центр косметологии
              </span>
              <span className="font-manrope mb-[34px]  font-semibold text-[32px] text-custom-slateGray">
                Клиники Екатерининская
              </span>
              <span className="font-manrope mb-[26px]  font-semibold text-[20px] text-custom-slateGray">
                Клиники Екатерининская
              </span>

              <ul className="font-manrope font-extralight text-base">
                <li>пн-пт: 8:00 - 20:00</li>
                <li>сб: 8:00 - 18:00</li>
                <li>вс: 10:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-full p-[34px] rounded-3xl  shadow-custom bg-custom-pureWhite">
              <div className="service-card__head flex items-center gap-2 ">
                <img className="-mb-1" src={vkIcon} alt="vk icon" />
                <span className="font-manrope  font-semibold text-[18px] text-custom-slateGray">
                  beautyclinic23ru
                </span>
              </div>
            </div>
            <div className=" w-full p-[34px] rounded-3xl  shadow-custom bg-custom-pureWhite">
              <div className="service-card__head  flex items-center gap-2">
                <img className="-mb-1" src={mailIcon} alt="mail icon" />
                <span className="font-manrope  font-semibold text-[18px] text-custom-slateGray">
                  ek@clinic23.ru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
