// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import women from "@/assets/imgs/woman.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { caruselItems } from "@/constants";

export default function Carusel() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper z-40 "
      >
        {caruselItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-between bg-custom-palePink"
          >
            <div className="flex flex-col justify-center w-[40%]">
              <h1 className="text-custom-slateGray font-manrope font-semibold text-[40px] mb-8">
                {item.title}
              </h1>
              <p className="text-custom-slateGray font-manrope text-2xl mb-14">
                {item.subtitle}
              </p>
              <Button size={"lg"} className="w-max">
                {item.titleBtn}
              </Button>
            </div>
            <div>
              <img src={women} alt="women" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
