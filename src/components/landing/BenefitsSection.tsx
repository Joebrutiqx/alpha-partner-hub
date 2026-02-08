import { Wallet, Rocket, HeadphonesIcon, Shield, TrendingUp, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Wallet,
    title: "Пассивный доход",
    description: "Получайте вознаграждение за каждого привлечённого клиента без ограничений по сумме.",
  },
  {
    icon: Rocket,
    title: "Простой старт",
    description: "Никаких вложений и сложных процедур — начните зарабатывать уже сегодня.",
  },
  {
    icon: HeadphonesIcon,
    title: "Персональная поддержка",
    description: "Менеджер программы поможет на каждом этапе и ответит на все вопросы.",
  },
  {
    icon: Shield,
    title: "Надёжный партнёр",
    description: "Альфа-Банк — один из крупнейших банков России с безупречной репутацией.",
  },
  {
    icon: TrendingUp,
    title: "Растущий доход",
    description: "Чем больше клиентов вы привлекаете, тем выше ваше вознаграждение.",
  },
  {
    icon: Gift,
    title: "Бесплатное участие",
    description: "Участие в программе полностью бесплатное — без скрытых платежей и комиссий.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Почему стоит стать партнёром
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
            Программа «Свой в Альфе» — это возможность зарабатывать, рекомендуя продукты ведущего банка
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Card
              key={b.title}
              className={`border-0 shadow-sm hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
