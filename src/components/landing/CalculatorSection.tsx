import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calculator, Users, CreditCard, Briefcase } from "lucide-react";

const PRODUCTS = [
  {
    icon: CreditCard,
    label: "Кредитная карта",
    reward: 1500,
  },
  {
    icon: Briefcase,
    label: "Кредит наличными",
    reward: 3000,
  },
  {
    icon: CreditCard,
    label: "Дебетовая карта",
    reward: 500,
  },
  {
    icon: Users,
    label: "РКО для бизнеса",
    reward: 5000,
  },
];

const CalculatorSection = () => {
  const [clients, setClients] = useState(10);
  const { ref, isVisible } = useScrollAnimation();

  const totalPerClient = PRODUCTS.reduce((sum, p) => sum + p.reward, 0);
  const monthlyIncome = clients * totalPerClient;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-muted/50">
      <div
        ref={ref}
        className={`container max-w-4xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground">
            <Calculator className="h-4 w-4 text-primary" />
            Калькулятор дохода
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Сколько вы можете заработать?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Двигайте ползунок, чтобы увидеть потенциальный доход от привлечения клиентов
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 md:p-10 shadow-sm space-y-8">
          {/* Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Клиентов в месяц
              </span>
              <span className="text-2xl font-bold text-foreground tabular-nums">
                {clients}
              </span>
            </div>
            <Slider
              value={[clients]}
              onValueChange={(v) => setClients(v[0])}
              min={1}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.label}
                className="rounded-xl border border-border bg-muted/40 p-4 text-center space-y-2"
              >
                <product.icon className="h-6 w-6 mx-auto text-primary" />
                <p className="text-xs font-medium text-muted-foreground leading-tight">
                  {product.label}
                </p>
                <p className="text-sm font-bold text-foreground">
                  {(product.reward * clients).toLocaleString("ru-RU")} ₽
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="rounded-xl bg-foreground p-6 text-center space-y-1">
            <p className="text-sm text-primary-foreground/70">
              Ваш потенциальный доход в месяц
            </p>
            <p className="text-4xl md:text-5xl font-black text-primary-foreground tabular-nums">
              {monthlyIncome.toLocaleString("ru-RU")}&nbsp;₽
            </p>
            <p className="text-xs text-primary-foreground/50 pt-1">
              *Приблизительный расчёт при максимальном вознаграждении за каждый продукт
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
