import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: [
      "Basic grammar checking",
      "Limited translations (1000 words/month)",
      "Standard writing suggestions",
      "Browser extension access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "9.99",
    period: "per month",
    features: [
      "Advanced grammar checking",
      "Unlimited translations",
      "Premium writing suggestions",
      "Priority support",
      "Custom templates",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "19.99",
    period: "per user/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Usage analytics",
      "Custom branding",
      "24/7 support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Choose the perfect plan for your writing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-8 relative animate-on-scroll ${
                plan.popular
                  ? "border-2 border-primary shadow-lg scale-105"
                  : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary">
                    ${plan.price}
                  </span>
                  <span className="text-secondary-light">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-secondary-light">
                    <div className="bg-primary/10 rounded-full p-1 mr-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full h-12 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-accent hover:bg-accent-dark text-secondary"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};