// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import women from "@/assets/imgs/woman.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";

export default function Carusel() {
  return (
    <>
      <Swiper
        speed={600}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper z-50 "
      >
        <SwiperSlide className="flex">
          <div className="flex flex-col justify-center">
            <h1 className="text-custom-slateGray font-manrope font-semibold text-[40px] mb-8">
              -50% на перманентный макияж
            </h1>
            <p className="text-custom-slateGray font-manrope text-2xl mb-14">
              Весь март
            </p>
            <Button size={"lg"} className="w-max z-50">
              Подробнее
            </Button>
          </div>
          <div>
            <img src={women} alt="women" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="flex flex-col justify-center">
            <h1 className="text-custom-slateGray font-manrope font-semibold text-[40px] mb-8">
              -50% на перманентный макияж
            </h1>
            <p className="text-custom-slateGray font-manrope text-2xl mb-14">
              Весь март
            </p>
            <Button size={"lg"} className="w-max z-50">
              Подробнее
            </Button>
          </div>
          <div>
            <img src={women} alt="women" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex ">
          <div className="flex flex-col justify-center">
            <h1 className="text-custom-slateGray font-manrope font-semibold text-[40px] mb-8">
              -50% на перманентный макияж
            </h1>
            <p className="text-custom-slateGray font-manrope text-2xl mb-14">
              Весь март
            </p>
            <Button size={"lg"} className="w-max z-50">
              Подробнее
            </Button>
          </div>
          <div>
            <img src={women} alt="women" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
