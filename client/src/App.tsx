import { Switch, Route, Router, useHashLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// The Router component now uses useHashLocation to handle routing
function HashRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        {/* The path should now be "/" */}
        <Route path="/" component={Home} /> 
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <HashRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
