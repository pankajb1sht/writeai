import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const integrationLogos = [
  {
    name: "Gmail",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
  },
  {
    name: "LinkedIn",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  },
  {
    name: "X (Twitter)",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023.svg",
  },
  {
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Microsoft Teams",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
  },
  {
    name: "WhatsApp",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  }
];

export const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fadeIn">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary-light rounded-full">
            #1 AI Writing Assistant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            Stop Switching Tabs to Chat With AI.
            <span className="text-gradient block mt-2">Use AI on Any Site, Instantly.</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary-light max-w-2xl mx-auto mb-8">
            Transform your writing instantly with our intelligent AI assistant. Perfect grammar,
            compelling content, and instant translations - all in your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg group">
                Try for Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Chrome className="w-6 h-6 text-secondary-light" />
                <span className="text-sm text-secondary-light">Chrome</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-secondary-light" />
                <span className="text-sm text-secondary-light">All Browsers</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 mb-8 overflow-hidden">
            <p className="text-sm text-secondary-light mb-6">Works seamlessly with your favorite platforms</p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="animate-carousel">
                {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                  <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 pl-4">
                    <div className="p-4">
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-12 w-12 mx-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="flex items-center justify-center gap-4 text-secondary-light">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            </div>
            <span className="text-sm">Join 100,000+ happy users</span>
          </div>
        </div>
      </div>
    </div>
  );
};