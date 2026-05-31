import { useState } from "react";
import { TerminalWindow } from "../components/TerminalWindow";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const conversions = [
  { label: "Decimal → Binary", from: "decimal", to: "binary" },
  { label: "Binary → Decimal", from: "binary", to: "decimal" },
  { label: "Decimal → Hex", from: "decimal", to: "hex" },
  { label: "Hex → Decimal", from: "hex", to: "decimal" },
  { label: "Decimal → Octal", from: "decimal", to: "octal" },
  { label: "Octal → Decimal", from: "octal", to: "decimal" },
];

function convert(value: string, from: string, to: string): string {
  if (!value.trim()) return "";
  try {
    let decimal: number;
    switch (from) {
      case "decimal": decimal = parseInt(value, 10); break;
      case "binary": decimal = parseInt(value, 2); break;
      case "hex": decimal = parseInt(value, 16); break;
      case "octal": decimal = parseInt(value, 8); break;
      default: return "Invalid";
    }
    if (isNaN(decimal)) return "Invalid input";
    switch (to) {
      case "decimal": return decimal.toString(10);
      case "binary": return decimal.toString(2);
      case "hex": return decimal.toString(16).toUpperCase();
      case "octal": return decimal.toString(8);
      default: return "Invalid";
    }
  } catch {
    return "Error";
  }
}

export default function Converter() {
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");
  const result = convert(input, conversions[selected].from, conversions[selected].to);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AnimatedSection animation="slide-in-up" className="w-full max-w-2xl">
        <TerminalWindow title="converter.tool">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold font-mono text-foreground">Number Converter</h1>
              <Link href="/">
                <Button variant="ghost" size="sm" className="font-mono text-muted-foreground hover:text-accent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {conversions.map((conv, i) => (
                <button
                  key={i}
                  onClick={() => { setSelected(i); setInput(""); }}
                  className={`p-2 rounded-lg font-mono text-xs transition-all duration-200 border ${
                    selected === i
                      ? "border-accent bg-accent/20 text-accent"
                      : "border-accent/20 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  {conv.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground block mb-2">
                  $ Input ({conversions[selected].from})
                </label>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={`Enter ${conversions[selected].from} value...`}
                  className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200"
                />
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 text-accent font-mono text-sm">
                  <span>{conversions[selected].from}</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>{conversions[selected].to}</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-muted-foreground block mb-2">
                  $ Output ({conversions[selected].to})
                </label>
                <div className="w-full bg-background/30 border border-accent/20 rounded-lg px-4 py-3 font-mono text-accent min-h-[48px]">
                  {result || <span className="text-muted-foreground">Result will appear here</span>}
                </div>
              </div>
            </div>

            <div className="pt-2 text-muted-foreground font-mono text-xs text-center">
              Supports decimal, binary, hexadecimal, and octal conversions
            </div>
          </div>
        </TerminalWindow>
      </AnimatedSection>
    </div>
  );
}
