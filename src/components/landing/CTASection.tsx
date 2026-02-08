import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacts" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div
        className={`container text-center max-w-2xl space-y-6 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
        ref={ref}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Начните зарабатывать сегодня
        </h2>
        <p className="text-primary-foreground/70 text-lg leading-relaxed">
          Свяжитесь с нами в удобном мессенджере — расскажем подробности и поможем начать.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            className="text-base font-semibold gap-2 w-full sm:w-auto"
            asChild
          >
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Telegram
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold gap-2 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
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
