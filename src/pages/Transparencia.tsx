import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Shield, Users, TrendingUp } from "lucide-react";

const Transparencia = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="container-custom text-center">
            <Shield className="mx-auto mb-6 text-white" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Transparência
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Prestamos contas de forma clara e transparente sobre todos os recursos recebidos e aplicados pela OSC
            </p>
          </div>
        </section>

        {/* Compromisso */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nosso Compromisso com a Transparência
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que a transparência é fundamental para construir e manter a confiança dos nossos 
                parceiros, doadores e da comunidade. Por isso, disponibilizamos de forma clara e acessível 
                todos os documentos e informações sobre nossa gestão.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <Shield className="mx-auto mb-4 text-secondary" size={48} />
                  <h3 className="font-bold text-lg mb-2">Certificações</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilidade Pública Municipal, Estadual e Federal
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <Users className="mx-auto mb-4 text-secondary" size={48} />
                  <h3 className="font-bold text-lg mb-2">Gestão</h3>
                  <p className="text-sm text-muted-foreground">
                    Diretoria voluntária e profissionais qualificados
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <TrendingUp className="mx-auto mb-4 text-secondary" size={48} />
                  <h3 className="font-bold text-lg mb-2">Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Relatórios anuais com indicadores e metas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documentos */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Documentos e Prestações de Contas
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto">
              {/* 2024 */}
              <Card className="mb-6 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">2024</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Balanço Anual 2024</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Relatório de Atividades</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2023 */}
              <Card className="mb-6 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">2023</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Balanço Anual 2023</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Relatório de Atividades</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2022 */}
              <Card className="mb-6 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">2022</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Balanço Anual 2022</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="text-secondary" size={24} />
                        <span className="text-sm font-medium">Relatório de Atividades</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documentos Institucionais */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Documentos Institucionais
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-between p-6 bg-muted rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-center gap-4">
                  <FileText className="text-secondary" size={32} />
                  <span className="font-medium">Estatuto Social</span>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>

              <div className="flex items-center justify-between p-6 bg-muted rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-center gap-4">
                  <FileText className="text-secondary" size={32} />
                  <span className="font-medium">Ata de Eleição da Diretoria</span>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>

              <div className="flex items-center justify-between p-6 bg-muted rounded-lg shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-center gap-4">
                  <FileText className="text-secondary" size={32} />
                  <span className="font-medium">CNPJ</span>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Diretoria */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Diretoria Atual
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Gestão 2023-2025
              </p>
            </div>

            {/* Presidente em Destaque */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="shadow-hover bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Presidente</h3>
                  <p className="text-lg text-muted-foreground">Maria Silva</p>
                </CardContent>
              </Card>
            </div>

            {/* Outros Membros */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                { cargo: "Vice-Presidente", nome: "João Santos" },
                { cargo: "Tesoureiro", nome: "Ana Costa" },
                { cargo: "Secretária", nome: "Pedro Oliveira" },
                { cargo: "Conselho Fiscal", nome: "Carlos Souza" },
              ].map((membro, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary">{membro.cargo}</h3>
                        <p className="text-muted-foreground">{membro.nome}</p>
                      </div>
                    </div>
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

export default Transparencia;
