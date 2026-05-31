import { useState, useEffect, useCallback } from "react";
import { TerminalWindow } from "./TerminalWindow";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Download, Calculator, Users } from "lucide-react";
import { portfolioConfig } from "../config/portfolio.config";
import pixelAvatar from "../assets/aegis.png";
import { Link } from "wouter";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const { personal, social, theme } = portfolioConfig;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < personal.tagline.length) {
        setDisplayText(personal.tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, theme.animations.typingSpeed);

    return () => clearInterval(timer);
  }, [personal.tagline, theme.animations.typingSpeed]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <AnimatedSection animation="slide-in-up" className="w-full relative z-10">
        <TerminalWindow title="root@aegis:~#" className="w-full max-w-4xl mx-auto backdrop-blur-md bg-background/95 border border-accent/20 shadow-2xl">
          <div className="text-center space-y-8">
            {/* Avatar */}
            <AnimatedSection animation="slide-in-up" delay={1} className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-full blur-2xl opacity-60 animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/40 to-secondary/40 rounded-full blur-xl opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -inset-3 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full blur-lg opacity-80 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -inset-2 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-accent/60 via-transparent to-secondary/60 blur-sm" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/60 to-secondary/60 rounded-full blur-md opacity-80 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative">
                  <img
                    src={pixelAvatar}
                    alt={`${personal.name}'s avatar`}
                    className="relative w-28 h-28 rounded-full border-2 border-accent/50 group-hover:border-accent/80 transition-all duration-700 transform group-hover:scale-105 pixel-art shadow-2xl shadow-accent/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, idx) => (
                    <div
                      key={idx}
                      className="absolute w-1 h-1 bg-accent/60 rounded-full animate-ping opacity-60"
                      style={{
                        left: `${20 + Math.cos(idx * 60 * Math.PI / 180) * 60}%`,
                        top: `${20 + Math.sin(idx * 60 * Math.PI / 180) * 60}%`,
                        animationDelay: `${idx * 0.5}s`,
                        animationDuration: `${2 + idx * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Name and Title */}
            <AnimatedSection animation="slide-in-up" delay={1.5} className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent tracking-tight">
                {personal.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-accent font-medium">
                {personal.title}
              </h2>
            </AnimatedSection>

            {/* Typing Animation */}
            <AnimatedSection delay={2} className="min-h-[120px] flex items-center justify-center">
              <div className="max-w-3xl mx-auto glass-card p-6 rounded-xl">
                <p className="text-foreground/90 leading-relaxed text-lg font-light">
                  {displayText}
                  <span className="cursor inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse">|</span>
                </p>
              </div>
            </AnimatedSection>

            {/* Online status */}
            <AnimatedSection animation="slide-in-up" delay={2.5} className="flex justify-center">
              <div className="flex items-center space-x-3 glass-card px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-foreground/80 font-medium">Online</span>
              </div>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection animation="slide-in-up" delay={3}>
              <div className="flex items-center justify-center space-x-3 glass-card p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-foreground/90">{personal.email}</span>
              </div>
            </AnimatedSection>

            {/* Action Buttons */}
            <AnimatedSection animation="slide-in-up" delay={3.5}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-button group relative overflow-hidden border-accent/50 bg-background/50 hover:border-accent hover:bg-accent/20 hover:text-foreground transition-all duration-500 backdrop-blur-sm"
                  onClick={() => window.open(social.github, '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-button group relative overflow-hidden border-accent/50 bg-background/50 hover:border-accent hover:bg-accent/20 hover:text-foreground transition-all duration-500 backdrop-blur-sm"
                  onClick={() => scrollToSection('contact')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Contact</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-button group relative overflow-hidden border-accent/50 bg-background/50 hover:border-accent hover:bg-accent/20 hover:text-foreground transition-all duration-500 backdrop-blur-sm"
                  onClick={() => scrollToSection('projects')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Projects</span>
                </Button>
                <Link href="/converter">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hero-button group relative overflow-hidden border-accent/50 bg-background/50 hover:border-accent hover:bg-accent/20 hover:text-foreground transition-all duration-500 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calculator className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Tools</span>
                  </Button>
                </Link>
                <Link href="/friends">
                  <Button
                    variant="outline"
                    size="lg"
                    className="hero-button group relative overflow-hidden border-accent/50 bg-background/50 hover:border-accent hover:bg-accent/20 hover:text-foreground transition-all duration-500 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Friends</span>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <AnimatedSection animation="fade-in" delay={5} className="flex justify-center pt-4">
              <div
                className="flex flex-col items-center space-y-2 text-muted-foreground cursor-pointer hover:text-accent transition-colors duration-300"
                onClick={() => scrollToSection('about')}
              >
                <span className="text-xs font-mono">scroll down</span>
                <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
              </div>
            </AnimatedSection>
          </div>
        </TerminalWindow>
      </AnimatedSection>
    </section>
  );
};
