import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Award, Calendar } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Sobre o Lar Francisco Franco
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Uma OSC que desde 1960 dedica-se ao acolhimento e desenvolvimento integral de crianças e adolescentes 
              de 6 a 14 anos em situação de vulnerabilidade, em parceria com a Assistência Social de Rancharia/SP.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-primary mb-6">Nossa História</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O Lar Francisco Franco foi fundado em 1960, em Rancharia/SP, 
                    como um projeto social sem fins lucrativos dedicado ao acolhimento e proteção de crianças e adolescentes 
                    de 6 a 14 anos em situação de vulnerabilidade social.
                  </p>
                  <p>
                    Ao longo das décadas, nossa instituição se tornou referência em acolhimento 
                    no contraturno escolar, utilizando o Serviço de Convivência e Fortalecimento de Vínculos. 
                    Atendemos crianças das zonas rurais e urbanas do município, sempre pautados 
                    pelos princípios do amor, respeito e dignidade humana.
                  </p>
                  <p>
                    Funcionamos de segunda a sexta-feira, das 8h às 17h, proporcionando um ambiente seguro, acolhedor 
                    e estruturado, onde cada criança e adolescente possa ter seus direitos garantidos e 
                    desenvolver todo seu potencial em parceria com a Assistência Social.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">Linha do Tempo</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                            <Calendar className="text-primary" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">1960</h4>
                          <p className="text-muted-foreground text-sm">Fundação do Lar Francisco Franco</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                            <Award className="text-primary" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">1975</h4>
                          <p className="text-muted-foreground text-sm">Reconhecimento como Utilidade Pública Municipal</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                            <Users className="text-primary" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">2000</h4>
                          <p className="text-muted-foreground text-sm">Ampliação das instalações e modernização</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                            <Heart className="text-primary" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">2025</h4>
                          <p className="text-muted-foreground text-sm">Mais de 500 vidas transformadas</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores Detalhado */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Missão, Visão e Valores
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card hover:shadow-hover transition-smooth bg-white">
                <CardContent className="p-8">
                  <Target className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acolher e proteger crianças e adolescentes de 6 a 14 anos em situação de 
                    vulnerabilidade, trabalhando em parceria com a Assistência Social para garantir 
                    seus direitos fundamentais, proporcionando um ambiente seguro e acolhedor com 
                    profissionais qualificados e comprometidos.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth bg-white">
                <CardContent className="p-8">
                  <Target className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência em acolhimento institucional na região, reconhecida pela excelência 
                    no atendimento e pelo compromisso com o desenvolvimento integral das crianças e 
                    adolescentes acolhidos, em parceria com a rede de Assistência Social.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth bg-white">
                <CardContent className="p-8">
                  <Heart className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Amor e respeito à dignidade humana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Compromisso com o desenvolvimento integral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Solidariedade e responsabilidade social</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Transparência e ética</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Trabalho em equipe e profissionalismo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nossa Equipe
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profissionais qualificados e dedicados que fazem a diferença todos os dias
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: "Psicóloga", count: "1" },
                { title: "Assistente Social", count: "1" },
                { title: "Coordenadora Pedagógica", count: "1" },
                { title: "Coordenadora Administrativa", count: "1" },
                { title: "Zelador", count: "1" },
                { title: "Professor de Capoeira", count: "1" },
                { title: "Auxiliar Geral", count: "2" },
                { title: "Educadores Físicos", count: "2" },
                { title: "Pedagogas", count: "3" },
              ].map((team) => (
                <Card key={team.title} className="text-center shadow-card hover:shadow-hover transition-smooth bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-primary" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{team.count}</div>
                    <p className="text-sm font-medium text-muted-foreground">{team.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
