import { TerminalWindow } from "../components/TerminalWindow";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const friends = [
  {
    name: "AeroX Community",
    role: "Development Community",
    description: "A comprehensive development platform and community hub for programmers and coders.",
    github: "https://github.com/AeroXDevs",
    discord: "https://discord.gg/ZVz7CgTy5v",
    tags: ["Discord", "Open Source", "Dev"]
  },
  {
    name: "StrelixCloud",
    role: "Hosting & Solutions",
    description: "Professional hosting platform providing custom development and premium digital solutions.",
    github: "https://github.com/AeroXDevs",
    discord: "https://strelixcloud.com",
    tags: ["Hosting", "Cloud", "Tech"]
  }
];

export default function Friends() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AnimatedSection animation="slide-in-up" className="w-full max-w-3xl">
        <TerminalWindow title="friends.network">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold font-mono text-foreground">Friends & Collaborators</h1>
              <Link href="/">
                <Button variant="ghost" size="sm" className="font-mono text-muted-foreground hover:text-accent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground font-mono text-sm">
              $ ls -la ~/network/friends
            </p>

            <div className="space-y-4">
              {friends.map((friend, index) => (
                <AnimatedSection key={friend.name} animation="slide-in-left" delay={index + 1}>
                  <div className="border border-accent/20 rounded-xl p-6 bg-background/50 hover:border-accent/40 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold font-mono text-foreground group-hover:text-accent transition-colors duration-300">
                            {friend.name}
                          </h3>
                          <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                            {friend.role}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {friend.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {friend.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs border-accent/20 text-muted-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent/30 hover:border-accent hover:bg-accent/20 font-mono text-xs"
                          onClick={() => window.open(friend.github, '_blank')}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent/30 hover:border-accent hover:bg-accent/20 font-mono text-xs"
                          onClick={() => window.open(friend.discord, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="pt-2 text-muted-foreground font-mono text-xs text-center">
              Want to collaborate? Reach out via the contact section.
            </div>
          </div>
        </TerminalWindow>
      </AnimatedSection>
    </div>
  );
}
