import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransition } from "./components/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/not-found";
import Converter from "./pages/Converter";
import Friends from "./pages/Friends";
import ContactEmail from "./pages/ContactEmail";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/converter" component={Converter} />
        <Route path="/friends" component={Friends} />
        <Route path="/contact-email" component={ContactEmail} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
