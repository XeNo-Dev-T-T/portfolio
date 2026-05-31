import { TerminalWindow } from "../components/TerminalWindow";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <TerminalWindow title="404.error" className="w-full max-w-2xl">
        <div className="text-center space-y-6 py-8">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-accent font-mono">404</h1>
            <p className="text-muted-foreground font-mono text-lg">
              $ <span className="text-foreground">cd /page-not-found</span>
            </p>
            <p className="text-red-400 font-mono text-sm">
              bash: /page-not-found: No such file or directory
            </p>
          </div>
          <p className="text-foreground/70 font-mono">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="border-accent/50 hover:border-accent hover:bg-accent/20 font-mono transition-all duration-300"
            >
              $ cd ~/home
            </Button>
          </Link>
        </div>
      </TerminalWindow>
    </div>
  );
}
