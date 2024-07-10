import HeaderDescription from "@/components/shared/HeaderDescription";
import { specialists } from "@/constants";
import telIcon from "@/assets/c-phone.svg";
import { useNavigate } from "react-router-dom";
function Specialists() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="mb-[81px]">
        <HeaderDescription />
      </div>
      <div className=" gap-6 grid grid-cols-3">
        {specialists.map((item) => (
          <div
            key={item.fullname}
            onClick={() => navigate("Бекетова Екатерина Николаевна")}
            className="relative  h-[450px]  cursor-pointer flex items-end  rounded-3xl bg-custom-radial p-[32px]"
          >
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
              <span className="font-manrope text-[18px] font-extralight text-custom-slateGray">
                cтаж {item.stage} лет
              </span>
            </div>
          </div>
        ))}
        <div className="h-[450px]  cursor-pointer flex flex-col justify-between  rounded-3xl bg-custom-radial p-[32px]">
          <div>
            <span className="font-manrope font-semibold text-custom-slateGray text-2xl">
              Запишитесь на консультацию
            </span>
            <p className="font-manrope text-[18px] pt-[20px] font-extralight text-custom-slateGray">
              Свяжитесь с нашими администраторами - они сориентируют вас и
              запишут к необходимому специалисту в удобное для вас время
            </p>
          </div>
          <div className="relative flex items-center gap-[30px]">
            <span className="font-manrope font-semibold text-custom-slateGray text-xl">
              +7 (861) 202-0-202
            </span>
            <div className="flex justify-center items-center size-[40px] rounded-full bg-custom-dustyRose">
              <div className="size-10 rounded-full animate-ping bg-custom-dustyRose"></div>
            </div>
            <div className="relative  top-[2px] left-[-60px] size-6  ">
              <img src={telIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialists;
