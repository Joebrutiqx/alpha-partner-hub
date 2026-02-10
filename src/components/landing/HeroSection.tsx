import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden text-primary-foreground animate-gradient-shift" style={{ background: "linear-gradient(-45deg, hsl(2, 87%, 30%), hsl(350, 80%, 25%), hsl(0, 0%, 8%), hsl(2, 87%, 35%))", backgroundSize: "300% 300%" }}>
      {/* Decorative accent */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
            Партнёрская программа Альфа-Банка
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
            Зарабатывай
            <span className="block text-white drop-shadow-lg"> с&nbsp;Альфа-Банком</span>
          </h1>
          <p className="text-xl text-white/80 max-w-lg leading-relaxed">
            Приглашай клиентов в Альфа-Банк и получай вознаграждение за каждого.
            Простой старт, прозрачные условия, стабильный доход.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              className="text-base font-semibold gap-2"
              asChild
            >
              <a href="https://t.me/alfabank_vigodno" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Написать в Telegram
              </a>
            </Button>
            <Button
              size="lg"
              className="text-base font-semibold gap-2 bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              asChild
            >
              <a href="https://wa.me/79173988243" target="_blank" rel="noopener noreferrer">
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
