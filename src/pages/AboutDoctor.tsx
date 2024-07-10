import { Button } from "@/components/ui/button";
import doctor from "@/assets/specialists/Beketova.png.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddCounsultation from "@/components/shared/AddCounsultation";
function AboutDoctor() {
  return (
    <div className="container ">
      <div className="flex gap-14 mb-20  p-10 rounded-3xl items-center bg-custom-softPink">
        <div className="shadow rounded-3xl">
          <img src={doctor} alt="doctor img" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-manrope font-semibold text-custom-slateGray text-[40px] mb-[25px]">
            Бекетова <br /> Екатерина Николаевна
          </h2>
          <ul className=" mb-[58px]">
            <li className="font-manrope font-extralight text-[20px] text-custom-slateGray">
              Дерматовенеролог
            </li>
            <li className="font-manrope font-extralight text-[20px] text-custom-slateGray">
              Стаж 11 лет
            </li>
            <li className="font-manrope font-extralight text-[20px] text-custom-slateGray">
              Стоимость приема от <span>1200 ₽</span>
            </li>
          </ul>
          <Button className="w-max" size={"lg"}>
            Записаться
          </Button>
        </div>
      </div>
      <div className="mb-20">
        <Accordion
          type="multiple"
          className="w-full flex flex-col gap-y-[30px] "
        >
          <AccordionItem
            value="item-1"
            className="bg-custom-pureWhite  rounded-3xl "
          >
            <AccordionTrigger className=" font-manrope font-semibold text-lg text-custom-slateGray py-[20px] px-8  ">
              Образование
            </AccordionTrigger>

            <AccordionContent className="py-5 pl-16 border-t-[1px]">
              <ul className="flex flex-col gap-6 list-disc  marker:text-custom-dustyRose font-manrope font-extralight text-custom-slateGray text-lg">
                <li>
                  Кубанский государственный медицинский университет,
                  квалификация Врач по специальности Лечебное дело , 2010 г.
                </li>
                <li>
                  Интернатура КубГМУ по специальности Дерматовенерология, 2017
                  г.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-custom-pureWhite  rounded-3xl"
          >
            <AccordionTrigger className="font-manrope font-semibold text-lg text-custom-slateGray  py-[20px] px-8">
              Дополнительное образование
            </AccordionTrigger>
            <AccordionContent className="border-t-[1px] py-5 pl-16">
              <ul className="flex flex-col gap-6 list-disc  marker:text-custom-dustyRose font-manrope font-extralight text-custom-slateGray text-lg">
                <li>
                  Кубанский государственный медицинский университет,
                  квалификация Врач по специальности Лечебное дело , 2010 г.
                </li>
                <li>
                  Интернатура КубГМУ по специальности Дерматовенерология, 2017
                  г.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="bg-custom-pureWhite  rounded-3xl"
          >
            <AccordionTrigger className="font-manrope font-semibold text-lg text-custom-slateGray  py-[20px] px-8">
              Направления работы специалиста
            </AccordionTrigger>
            <AccordionContent className="border-t-[1px] py-5 pl-16">
              <ul className="flex flex-col gap-6 list-disc  marker:text-custom-dustyRose font-manrope font-extralight text-custom-slateGray text-lg">
                <li>
                  Кубанский государственный медицинский университет,
                  квалификация Врач по специальности Лечебное дело , 2010 г.
                </li>
                <li>
                  Интернатура КубГМУ по специальности Дерматовенерология, 2017
                  г.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <AddCounsultation />
      </div>
    </div>
  );
}

export default AboutDoctor;
