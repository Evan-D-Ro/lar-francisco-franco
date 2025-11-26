import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgramCard } from "@/components/ProgramCard";
import { Home, BookOpen, Brain, Palette, Users, Shield, Heart, Sparkles } from "lucide-react";
import programasEducacao from "@/assets/programas-educacao.jpg";
import programasPsicologia from "@/assets/programas-psicologia.jpg";
import programasOficinas from "@/assets/programas-oficinas.jpg";

const Programas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding gradient-primary">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Nossos Programas
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Conjunto completo de atividades voltadas ao acolhimento e desenvolvimento integral das crianças e adolescentes de 6 a 14 anos
            </p>
          </div>
        </section>

        {/* Programas Principais */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <ProgramCard
                icon={Home}
                title="Acolhimento Institucional"
                description="Oferecemos um ambiente seguro, acolhedor e estruturado para crianças e adolescentes de 6 a 14 anos, com profissionais qualificados oferecendo cuidados integrais 24 horas por dia. Cada criança tem seu espaço respeitado, com quartos confortáveis, alimentação balanceada e todos os cuidados básicos garantidos."
                image={programasEducacao}
              />
              <ProgramCard
                icon={BookOpen}
                title="Apoio às Atividades Escolares"
                description="Acompanhamento das atividades escolares em parceria com a rede de ensino. Garantimos frequência escolar, apoio nas tarefas e suporte básico, respeitando a autonomia pedagógica das escolas."
                image={programasEducacao}
              />
              <ProgramCard
                icon={Brain}
                title="Apoio Psicossocial"
                description="Atendimento psicológico e social realizado por profissionais especializados. Trabalhamos o desenvolvimento emocional, fortalecimento de vínculos e superação de situações de vulnerabilidade, sempre respeitando o tempo e necessidades de cada criança."
                image={programasPsicologia}
              />
              <ProgramCard
                icon={Palette}
                title="Atividades Recreativas"
                description="Diversas atividades que estimulam a socialização, criatividade e bem-estar: arte, música, dança, esportes e brincadeiras. Todas as atividades são conduzidas por profissionais e voluntários qualificados."
                image={programasOficinas}
              />
              <ProgramCard
                icon={Users}
                title="Reintegração Familiar"
                description="Trabalho em parceria com a Assistência Social focado na possível reintegração familiar responsável. Realizamos acompanhamento das famílias, orientação e preparação para o retorno quando possível e seguro."
              />
              <ProgramCard
                icon={Shield}
                title="Articulação em Rede"
                description="Mantemos articulação com a rede de Assistência Social, saúde, educação e outras instituições. Essas parcerias fortalecem a garantia de direitos e ampliam as oportunidades das crianças e adolescentes."
              />
            </div>
          </div>
        </section>

        {/* Atividades Complementares */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Atividades Complementares
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <Heart className="text-secondary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Alimentação Balanceada</h3>
                <p className="text-muted-foreground">
                  Cardápio elaborado por nutricionista, garantindo refeições saudáveis e nutritivas.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <Sparkles className="text-secondary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Cuidados de Saúde</h3>
                <p className="text-muted-foreground">
                  Acompanhamento médico regular, odontológico e acesso a tratamentos necessários.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <Users className="text-secondary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Atividades Culturais</h3>
                <p className="text-muted-foreground">
                  Passeios, visitas a museus, cinema, teatro e outras experiências culturais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rotina */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Nossa Rotina
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
                <p className="text-lg text-muted-foreground">
                  Uma rotina estruturada que proporciona segurança e desenvolvimento
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { time: "7h00", activity: "Despertar e café da manhã" },
                  { time: "8h00", activity: "Preparação para a escola" },
                  { time: "13h00", activity: "Almoço e descanso" },
                  { time: "14h00", activity: "Atividades pedagógicas e recreativas" },
                  { time: "17h00", activity: "Lanche da tarde" },
                  { time: "18h00", activity: "Tempo livre e brincadeiras" },
                  { time: "19h00", activity: "Jantar" },
                  { time: "20h00", activity: "Higiene e preparação para dormir" },
                  { time: "21h00", activity: "Descanso noturno" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-secondary/20 transition-smooth"
                  >
                    <div className="flex-shrink-0 w-20 font-bold text-primary">{item.time}</div>
                    <div className="flex-grow text-muted-foreground">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programas;
