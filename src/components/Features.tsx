import { Check, Globe, Sparkles, Zap, Brain, Languages, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description:
      "Advanced AI models help you write better content, fix grammar, and improve your writing style.",
  },
  {
    icon: MessageSquare,
    title: "Smart Replies",
    description:
      "Generate professional email responses and messages in seconds with context-aware AI.",
  },
  {
    icon: Languages,
    title: "Instant Translation",
    description:
      "Translate your content into multiple languages while maintaining context and tone.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get instant suggestions and improvements without interrupting your workflow.",
  },
];

const stats = [
  { value: "100K+", label: "Active Users" },
  { value: "50M+", label: "Words Generated" },
  { value: "150+", label: "Countries" },
  { value: "4.9/5", label: "User Rating" },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Write Smarter, Not Harder
          </h2>
          <p className="text-lg text-secondary-light max-w-2xl mx-auto">
            Powerful AI features to help you communicate more effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-secondary-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};