import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import ComoAjudar from "./pages/ComoAjudar";
import Transparencia from "./pages/Transparencia";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// --- LAYOUT CONDICIONAL (igual ao seu projeto anterior) ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Rotas onde Header e Footer NÃO devem aparecer
  const hiddenRoutes = ["/auth", "/admin"];

  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        {/* AQUI o Layout envolve todas as rotas */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/como-ajudar" element={<ComoAjudar />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalhe />} />
            <Route path="/contato" element={<Contato />} />

            {/* Páginas sem Header/Footer */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
