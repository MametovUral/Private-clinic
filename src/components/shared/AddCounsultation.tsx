// import { useForm } from "react-hook-form";
import { Switch } from "../ui/switch";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ConsultationSchema } from "@/lib/validation";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";

import { Button } from "../ui/button";

import telIcon from "@/assets/c-tel.svg";

import "@/styles/addCounsultation.scss";

function AddCounsultation() {
  return (
    <div className="container flex flex-col items-center justify-center text-center bg-custom-softPink rounded-3xl p-8">
      <h3 className=" font-manrope font-semibold text-[32px] text-custom-slateGray">
        Запишитесь на консультацию
      </h3>
      <p className="font-manrope font-extralight text-base mb-[25px]">
        Укажите свой номер телефона. Мы свяжемся с вами в ближайшее время.
      </p>
      <div className="flex mb-4 justify-center items-center gap-[30px] ">
        <div className="flex ">
          <div className="pointer-events-none rounded-l-3xl w-[40px] flex items-center justify-center border-r-0 border bg-custom-pureWhite">
            <img src={telIcon} alt="icon" />
          </div>
          <input
            className="btn-consultation  border rounded-r-3xl px-[9px] py-[8px] font-manrope font-medium text-[15px] text-custom-charcoal"
            type="tel"
            placeholder="+998 (__) ___-__-__"
          />
        </div>

        <Button
          variant={"outline"}
          className="bg-custom-dustyRose font-manrope  text-[15px] font-medium text-custom-pureWhite"
          type="submit"
          size={"lg"}
        >
          Отправить
        </Button>
      </div>
      <div className="flex  gap-4  w-[60%]">
        <Switch />
        <p className="font-manrope font-extralight text-[12px] text-left">
          Я соглашаюсь с политикой обработки персональных данных и
          пользовательским соглашением, а также даю согласие на обработку
          персональных данных.
        </p>
      </div>
    </div>
  );
}

export default AddCounsultation;

