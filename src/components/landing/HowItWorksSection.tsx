import { UserPlus, Users, BadgeRussianRuble } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Зарегистрируйтесь",
    description: "Свяжитесь с нами через Telegram или WhatsApp и получите доступ к программе.",
  },
  {
    icon: Users,
    number: "02",
    title: "Приглашайте клиентов",
    description: "Рекомендуйте продукты Альфа-Банка друзьям, знакомым и подписчикам.",
  },
  {
    icon: BadgeRussianRuble,
    number: "03",
    title: "Получайте вознаграждение",
    description: "За каждого привлечённого клиента вы получаете денежное вознаграждение на карту.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Как это работает
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Три простых шага до вашего первого заработка
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center space-y-4 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="text-5xl font-black text-muted-foreground/20">{step.number}</span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
