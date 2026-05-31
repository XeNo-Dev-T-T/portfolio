import { TerminalWindow } from "./TerminalWindow";
import { AnimatedSection } from "./AnimatedSection";
import { portfolioConfig } from "../config/portfolio.config";
import { Code, Server, Palette, Settings, Cpu } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Frontend: Code,
  Language: Code,
  Backend: Server,
  Design: Palette,
  DevOps: Settings,
  Infrastructure: Cpu
};

export const Skills = () => {
  const { skills: skillsData } = portfolioConfig;

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection animation="slide-in-up">
          <TerminalWindow title="Skills.exe" className="w-full backdrop-blur-sm bg-background/95 border-2 border-accent/30">
            <div className="space-y-10">
              <AnimatedSection delay={2}>
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold font-mono text-foreground">Technical Skills</h2>
                  <div className="w-24 h-1 bg-accent mx-auto rounded-full shadow-lg shadow-accent/50" />
                  <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
                    My arsenal of technologies and tools for crafting digital experiences
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {skillsData.map((skill, index) => {
                  const IconComponent = iconMap[skill.category] || Code;
                  return (
                    <AnimatedSection
                      key={skill.name}
                      animation="fade-in"
                      delay={1 + index * 0.05}
                    >
                      <div className="skill-badge p-6 rounded-xl text-center group relative bg-background/50 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                        <div className="relative z-10">
                          <div className="mb-4">
                            <IconComponent className="w-10 h-10 mx-auto text-accent group-hover:scale-110 transition-transform duration-200" />
                          </div>

                          <span className="text-base font-mono block mb-3 text-foreground group-hover:text-accent transition-colors duration-200">
                            {skill.name}
                          </span>

                          <div className="space-y-2">
                            <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-1000 ease-out rounded-full"
                                style={{
                                  width: `${skill.level}%`,
                                  transitionDelay: `${(1 + index * 0.05) * 100 + 300}ms`
                                }}
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground font-mono">
                                {skill.category}
                              </span>
                              <span className="text-sm text-accent font-mono font-bold">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection animation="slide-in-up" delay={5}>
                <div className="text-center pt-8 space-y-6">
                  <div className="bg-background/30 backdrop-blur-sm p-6 rounded-xl border border-accent/20">
                    <div className="flex justify-center flex-wrap gap-4 text-xs font-mono">
                      <span className="text-accent">Years of Experience: 3+</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-accent">Projects Completed: 35+</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-accent">Technologies Mastered: 20+</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 font-mono text-sm italic tracking-wide">
                    "I don't just write code — I craft logic into life, one line at a time."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </TerminalWindow>
        </AnimatedSection>
      </div>
    </section>
  );
};
