import { TerminalWindow } from "./TerminalWindow";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "../config/portfolio.config";
import aeroXIcon from "../assets/AeroX.png";
import { useLocation } from "wouter";

export const Contact = () => {
  const { content, social, personal } = portfolioConfig;
  const [, navigate] = useLocation();

  const copyDiscordUsername = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText('aegis');
    const button = event.currentTarget;
    const original = button.innerHTML;
    button.textContent = 'Username copied!';
    setTimeout(() => {
      button.innerHTML = original;
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="slide-in-up">
          <TerminalWindow title="Contact">
            <div className="space-y-8 text-center">
              <AnimatedSection delay={2}>
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  {content.contact.title}
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                <AnimatedSection animation="slide-in-up" delay={3}>
                  <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
                    {content.contact.description}
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-up" delay={4}>
                  <div className="flex items-center justify-center space-x-2 text-accent font-mono">
                    <Mail className="w-5 h-5" />
                    <span>{personal.email}</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-up" delay={5}>
                  <p className="text-muted-foreground">
                    You can also connect with me on social media
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-up" delay={6}>
                  <div className="flex justify-center flex-wrap gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="terminal-hover font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => navigate('/contact-email')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="terminal-hover font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => window.open(social.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="terminal-hover font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => window.open('https://discord.gg/ZVz7CgTy5v', '_blank')}
                    >
                      <img src={aeroXIcon} alt="AeroX Icon" className="w-4 h-4 mr-2 object-contain" />
                      AeroX
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="terminal-hover font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={copyDiscordUsername}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Discord
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="slide-in-up" delay={7}>
                <div className="pt-8 text-muted-foreground font-mono text-sm">
                  <p>$ {content.contact.cta}</p>
                  <div className="cursor inline-block w-2 h-4 bg-accent ml-1 animate-pulse">_</div>
                </div>
              </AnimatedSection>
            </div>
          </TerminalWindow>
        </AnimatedSection>
      </div>
    </section>
  );
};
