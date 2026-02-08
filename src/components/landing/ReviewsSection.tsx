import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "Алексей М.",
    role: "Партнёр с 2023 года",
    text: "За первый месяц привлёк 12 клиентов и получил отличное вознаграждение. Всё прозрачно и быстро!",
    initials: "АМ",
  },
  {
    name: "Екатерина В.",
    role: "Блогер, партнёр программы",
    text: "Рекомендую продукты Альфа-Банка своей аудитории — это удобно и выгодно. Поддержка на высшем уровне.",
    initials: "ЕВ",
  },
  {
    name: "Дмитрий К.",
    role: "Предприниматель",
    text: "Программа стала отличным источником дополнительного дохода. Простая регистрация, понятные условия.",
    initials: "ДК",
  },
  {
    name: "Ольга С.",
    role: "Финансовый консультант",
    text: "Совмещаю работу и партнёрство — стабильный доход без лишних усилий. Рекомендую коллегам!",
    initials: "ОС",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Отзывы партнёров
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Что говорят те, кто уже зарабатывает с программой
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Card
              key={r.name}
              className={`border-0 shadow-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
