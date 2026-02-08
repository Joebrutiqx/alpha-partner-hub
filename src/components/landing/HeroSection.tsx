import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground text-primary-foreground">
      {/* Decorative accent */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
            Партнёрская программа Альфа-Банка
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Зарабатывай
            <span className="text-primary"> с&nbsp;Альфа-Банком</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
            Приглашай клиентов в Альфа-Банк и получай вознаграждение за каждого.
            Простой старт, прозрачные условия, стабильный доход.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              className="text-base font-semibold gap-2"
              asChild
            >
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
