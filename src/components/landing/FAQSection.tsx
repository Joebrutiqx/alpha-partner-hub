import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Нужно ли платить за участие в программе?",
    answer:
      "Нет, участие в программе «Свой в Альфе» полностью бесплатное. Вы не несёте никаких расходов — только получаете вознаграждение за привлечённых клиентов.",
  },
  {
    question: "Как начисляется вознаграждение?",
    answer:
      "Вознаграждение начисляется за каждого привлечённого клиента, который оформил продукт Альфа-Банка. Сумма зависит от типа продукта и выплачивается на вашу карту.",
  },
  {
    question: "Кто может стать партнёром?",
    answer:
      "Партнёром может стать любой совершеннолетний гражданин РФ. Не требуется специального образования или опыта в финансовой сфере.",
  },
  {
    question: "Как быстро я получу первый доход?",
    answer:
      "Первое вознаграждение вы можете получить уже в течение первого месяца. Скорость зависит от того, как быстро привлечённые клиенты оформят продукты банка.",
  },
  {
    question: "Какие продукты Альфа-Банка можно рекомендовать?",
    answer:
      "Вы можете рекомендовать кредитные и дебетовые карты, кредиты, вклады, РКО для бизнеса и другие банковские продукты. Полный список доступен после регистрации.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Ответы на популярные вопросы о программе
          </p>
        </div>
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
