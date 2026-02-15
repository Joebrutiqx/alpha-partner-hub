import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacts" className="relative py-20 md:py-28 overflow-hidden animate-gradient-shift" style={{ background: "linear-gradient(-45deg, hsl(2, 87%, 30%), hsl(350, 80%, 25%), hsl(0, 0%, 8%), hsl(2, 87%, 35%))", backgroundSize: "300% 300%" }}>
      {/* Decorative glows */}
      <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[hsl(2,87%,54%)] opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[hsl(15,90%,50%)] opacity-15 blur-3xl" />

      <div
        className={`container relative text-center max-w-2xl space-y-6 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
        ref={ref}
      >
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          Начните зарабатывать сегодня
        </h2>
        <p className="text-white/80 text-xl leading-relaxed">
          Свяжитесь с нами в удобном мессенджере — расскажем подробности и поможем начать.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            className="text-base font-semibold gap-2 w-full sm:w-auto bg-[hsl(2,87%,54%)] text-white hover:bg-[hsl(2,87%,48%)]"
            asChild
          >
            <a href="https://t.me/shiFar22" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Telegram
            </a>
          </Button>
          <Button
            size="lg"
            className="text-base font-semibold gap-2 w-full sm:w-auto bg-[hsl(200,100%,40%)] text-white hover:bg-[hsl(200,100%,35%)]"
            asChild
          >
            <a href="https://t.me/alfabank_vigodno" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Группа в Telegram
            </a>
          </Button>
          <Button
            size="lg"
            className="text-base font-semibold gap-2 w-full sm:w-auto bg-white text-[hsl(0,0%,8%)] hover:bg-white/90"
            asChild
          >
            <a href="https://wa.me/79173988243" target="_blank" rel="noopener noreferrer">
              WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
