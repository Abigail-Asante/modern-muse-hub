import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Board from "./pages/Board";
import Leadership from "./pages/Leadership";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are/about" element={<About />} />
          <Route path="/who-we-are/board" element={<Board />} />
          <Route path="/who-we-are/leadership" element={<Leadership />} />
          <Route path="/who-we-are" element={<About />} />

          <Route path="/what-we-do/:id" element={<ProjectDetail />} />
          <Route path="/what-we-do" element={<Projects />} />

          <Route path="/media" element={<Media />} />
          <Route path="/media/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
