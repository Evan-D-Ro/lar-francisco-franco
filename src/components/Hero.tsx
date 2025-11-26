import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/fachada-real.jpg";
import decorativeClouds from "@/assets/decorative-clouds.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fachada do Lar Francisco Franco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>


      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-primary px-4 py-2 rounded-full mb-6 shadow-soft">
            <Heart size={18} className="fill-primary" />
            <span className="text-sm font-semibold">Transformando vidas desde 1950</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cuidando de Vidas.<br />
            <span className="text-secondary">Transformando Futuros.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Uma OSC dedicada ao acolhimento e desenvolvimento integral de crianças e adolescentes de 6 a 14 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/sobre">
                Conheça Nosso Trabalho
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/como-ajudar">
                Como Ajudar
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};
