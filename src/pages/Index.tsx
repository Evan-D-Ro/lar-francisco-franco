import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";
import { ValueCard } from "@/components/ValueCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Target,
  Shield,
  BookOpen,
  Brain,
  Palette,
  Home,
  HandHeart,
  DollarSign,
  Gift,
  Briefcase,
  TrendingUp,
  Calendar,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import programasEducacao from "@/assets/programas-educacao.jpg";
import programasPsicologia from "@/assets/programas-psicologia.jpg";
import programasOficinas from "@/assets/programas-oficinas.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Sobre Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sobre o Lar Francisco Franco
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-white/95 leading-relaxed">
              Desde 1960, somos um projeto social sem fins lucrativos que utiliza o Serviço de Convivência e Fortalecimento de Vínculos, 
              atendendo crianças e adolescentes de 6 a 14 anos em situação de vulnerabilidade social nas zonas rurais e urbanas 
              do município de Rancharia no contraturno escolar, de segunda a sexta-feira, das 8h às 17h.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">65+</div>
                <p className="text-muted-foreground">Anos de História</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Vidas Transformadas</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">6-14</div>
                <p className="text-muted-foreground">Anos (Faixa Etária)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Missão, Visão e Valores
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              title="Missão"
              description="Acolher e proteger crianças e adolescentes de 6 a 14 anos, trabalhando em parceria com a Assistência Social para garantir seus direitos fundamentais."
            />
            <ValueCard
              icon={TrendingUp}
              title="Visão"
              description="Ser referência em acolhimento institucional, garantindo proteção, desenvolvimento integral e reintegração familiar responsável."
            />
            <ValueCard
              icon={Heart}
              title="Valores"
              description="Amor, respeito, dignidade, solidariedade e compromisso com o desenvolvimento pleno de cada criança e adolescente acolhido."
            />
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Programas
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um conjunto completo de atividades voltadas ao acolhimento e desenvolvimento integral das crianças e adolescentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProgramCard
                icon={Home}
                title="Acolhimento Institucional"
                description="Ambiente seguro e acolhedor para crianças e adolescentes de 6 a 14 anos, com cuidados integrais 24 horas."
                image={programasEducacao}
              />
              <ProgramCard
                icon={BookOpen}
                title="Apoio às Atividades Escolares"
                description="Acompanhamento das atividades escolares em parceria com a rede de ensino municipal."
                image={programasEducacao}
              />
              <ProgramCard
                icon={Brain}
                title="Apoio Psicossocial"
                description="Atendimento psicológico e social para desenvolvimento emocional e fortalecimento de vínculos."
                image={programasPsicologia}
              />
              <ProgramCard
                icon={Palette}
                title="Atividades Recreativas"
                description="Arte, música, dança, esportes e brincadeiras que promovem socialização e bem-estar."
                image={programasOficinas}
              />
              <ProgramCard
                icon={Users}
                title="Reintegração Familiar"
                description="Trabalho junto à Assistência Social para reintegração familiar responsável."
              />
              <ProgramCard
                icon={Shield}
                title="Articulação em Rede"
                description="Parceria com a rede de Assistência Social, saúde e educação da região."
              />
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/programas">
                Conheça Todos os Programas
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como Ajudar */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Como Você Pode Ajudar
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Sua contribuição faz toda a diferença na vida das crianças e adolescentes acolhidos. Conheça as formas de apoiar nosso trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-card hover:shadow-hover transition-smooth hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Doações Financeiras</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contribua mensalmente ou com valor único
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Gift className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Doações de Materiais</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Roupas, alimentos, materiais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <HandHeart className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Voluntariado</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Doe seu tempo e talento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth hover:scale-105 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">Parcerias</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Empresas e instituições parceiras
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/como-ajudar">
                Saiba Como Contribuir
                <Heart className="fill-primary" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossas Parcerias
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos em conjunto com diversas instituições para oferecer o melhor atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Projeto Guri</h3>
                <p className="text-sm text-muted-foreground">
                  Parceria para desenvolvimento artístico e cultural
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">AABB Comunidade</h3>
                <p className="text-sm text-muted-foreground">
                  Atividades esportivas e recreativas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Governo Municipal</h3>
                <p className="text-sm text-muted-foreground">
                  Apoio e convênios locais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Governos Estadual e Federal</h3>
                <p className="text-sm text-muted-foreground">
                  Políticas públicas e recursos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Depoimentos
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="O Lar Francisco Franco faz um trabalho essencial na nossa comunidade. É inspirador ver o compromisso de cada profissional com o bem-estar das crianças e adolescentes."
              author="Maria Silva"
              role="Voluntária"
            />
            <TestimonialCard
              quote="Parceria que faz a diferença! Nossa empresa se orgulha de apoiar uma OSC tão séria e comprometida com a proteção e desenvolvimento das crianças."
              author="João Santos"
              role="Empresário Parceiro"
            />
            <TestimonialCard
              quote="Cada visita ao Lar nos enche de esperança. Ver o cuidado dedicado às crianças e adolescentes acolhidos é emocionante."
              author="Ana Costa"
              role="Doadora"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Últimas Notícias
              </h2>
              <div className="w-24 h-1 bg-secondary rounded-full" />
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">Ver Todas</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer bg-white">
                <div className="h-48 bg-gradient-primary" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={16} />
                    <span>15 de Novembro, 2025</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">
                    Evento Especial: Dia das Crianças
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Celebramos o Dia das Crianças com atividades especiais e muita diversão...
                  </p>
                  <Button variant="link" className="p-0">
                    Ler mais <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <Heart className="mx-auto mb-6 fill-secondary text-secondary" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faça Parte Dessa Transformação
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Cada contribuição, por menor que seja, faz uma enorme diferença na vida das crianças e adolescentes acolhidos.
            Juntos, podemos construir futuros melhores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/como-ajudar">Quero Ajudar Agora</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
