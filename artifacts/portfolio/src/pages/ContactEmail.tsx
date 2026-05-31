import { useState } from "react";
import { TerminalWindow } from "../components/TerminalWindow";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail, Send, CheckCircle } from "lucide-react";
import { portfolioConfig } from "../config/portfolio.config";

export default function ContactEmail() {
  const { personal } = portfolioConfig;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = "w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200 resize-none";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AnimatedSection animation="slide-in-up" className="w-full max-w-2xl">
        <TerminalWindow title="mail.compose">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <h1 className="text-2xl font-bold font-mono text-foreground">Send a Message</h1>
              </div>
              <Link href="/">
                <Button variant="ghost" size="sm" className="font-mono text-muted-foreground hover:text-accent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground font-mono text-sm">
              $ compose --to {personal.email}
            </p>

            {sent ? (
              <AnimatedSection animation="fade-in">
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-400" />
                  <p className="text-foreground font-mono text-lg">Email client opened!</p>
                  <p className="text-muted-foreground font-mono text-sm text-center">
                    Your default email client should have opened with the message pre-filled.
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">$ name</label>
                    <input
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground block mb-2">$ email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">$ subject</label>
                  <input
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="Message subject"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground block mb-2">$ message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Your message..."
                    rows={6}
                    className={inputClass}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </TerminalWindow>
      </AnimatedSection>
    </div>
  );
}
