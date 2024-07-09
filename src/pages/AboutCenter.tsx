import clinic from "@/assets/imgs/clinic.png";
import AddCounsultation from "@/components/shared/AddCounsultation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AboutCenter() {
  return (
    <section className="container pb-24">
      <div className="mb-9">
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

            <Link to={"/"}>
              <Button className="mb-[93px]" size={"lg"}>
                Посетить центр
              </Button>
            </Link>
          </div>
          <div>
            <img src={clinic} alt="clinic" />
          </div>
        </div>
        <div className="flex justify-between  rounded-3xl  bg-custom-pureWhite">
          <div className="w-full flex flex-col items-center text-center border-r p-2 ">
            <h4 className="font-manrope  font-semibold text-[58px] text-custom-dustyRose">
              15
            </h4>
            <p className="font-manrope font-semibold text-[20opx] text-custom-slateGray">
              лет средний стаж специалистов
            </p>
          </div>
          <div className="w-full flex flex-col items-center text-center  border-r p-2 ">
            <h4 className="font-manrope  font-semibold text-[58px] text-custom-dustyRose">
              50+
            </h4>
            <p className="font-manrope font-semibold text-[20opx] text-custom-slateGray">
              видов услуг
            </p>
          </div>
          <div className="w-full flex flex-col items-center text-center border-r p-2 ">
            <h4 className="font-manrope  font-semibold text-[58px] text-custom-dustyRose">
              8000+
            </h4>
            <p className="w-[60%]  font-manrope font-semibold text-[20opx] text-custom-slateGray">
              лояльных посетителей
            </p>
          </div>
          <div className="w-full flex flex-col items-center text-center  p-2 ">
            <h4 className="font-manrope  font-semibold text-[58px] text-custom-dustyRose">
              20000+
            </h4>
            <p className="w-[60%]  font-manrope font-semibold text-[20opx] text-custom-slateGray">
              проведенных процедур
            </p>
          </div>
        </div>
      </div>
      <div className="mb-9">
        <div>
          <h4 className="font-manrope text-[32px] font-semibold text-custom-slateGray">
            Место для вашей красоты
          </h4>
        </div>
      </div>
      <div>
        <AddCounsultation />
      </div>
    </section>
  );
}

export default AboutCenter;
