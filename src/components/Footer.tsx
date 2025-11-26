import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4">Lar Francisco Franco</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              OSC de acolhimento para crianças e adolescentes de 6 a 14 anos. Amor, respeito e dedicação desde 1950.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:scale-110 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/sobre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Sobre Nós
              </Link>
              <Link to="/programas" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Programas
              </Link>
              <Link to="/como-ajudar" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Como Ajudar
              </Link>
              <Link to="/transparencia" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Transparência
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Rua Mário César de Camargo, 1345<br />
                  Centro, Rancharia/SP<br />
                  CEP 19600-025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">(18) 3265-1200</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">contato@larfranciscofranco.org.br</p>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
            <p className="text-sm text-primary-foreground/80 mb-3">
              <strong>Segunda a Sexta:</strong><br />
              8h às 17h
            </p>
            <p className="text-sm text-primary-foreground/80 text-xs">
              CNPJ: 55.687.404/0001-97
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80 flex items-center gap-2">
              © {currentYear} Lar Francisco Franco. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/80 flex items-center gap-2">
              Feito com <Heart size={16} className="text-secondary fill-secondary" /> para nossas crianças e adolescentes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
