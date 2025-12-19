import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Shield, Users, TrendingUp, Scale, BookOpen, Info } from "lucide-react";

const Transparencia = () => {
  return (
    <div className="min-h-screen">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="container-custom text-center">
            <Shield className="mx-auto mb-6 text-white" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Transparência
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Prestamos contas de forma clara e transparente sobre todos os recursos recebidos e aplicados pela OSC.
            </p>
          </div>
        </section>

        {/* Compromisso */}
        <section className="section-padding bg-background pb-0">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nosso Compromisso
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que a transparência é fundamental para construir e manter a confiança dos nossos
                parceiros, doadores e da comunidade. Por isso, disponibilizamos de forma clara e acessível
                todos os documentos e informações sobre nossa gestão.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* --- NOVA SEÇÃO: FUNDAMENTAÇÃO LEGAL COMPLETA --- */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="container-custom">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Scale className="text-primary" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Fundamentação Legal
                </h2>
              </div>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
                O Lar Francisco Franco atua em estrita conformidade com a legislação brasileira, garantindo a publicidade e a transparência na aplicação dos recursos públicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* LEI DE ACESSO À INFORMAÇÃO */}
              <Card className="bg-white border-l-4 border-l-secondary shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-secondary" size={28} />
                    <h3 className="text-xl font-bold text-primary">Lei de Acesso à Informação</h3>
                  </div>
                  <p className="text-sm font-bold text-gray-700 mb-2">Lei nº 12.527/2011</p>
                  <p className="text-muted-foreground text-justify text-sm leading-relaxed mb-4">
                    Esta lei aplica-se às entidades privadas sem fins lucrativos que recebem recursos públicos. Em cumprimento a este dispositivo, o Lar Francisco Franco torna público o acesso às informações sobre o recebimento e destinação de tais recursos.
                  </p>
                </CardContent>
              </Card>

              {/* MROSC */}
              <Card className="bg-white border-l-4 border-l-primary shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-primary" size={28} />
                    <h3 className="text-xl font-bold text-primary">Marco Regulatório (MROSC)</h3>
                  </div>
                  <p className="text-sm font-bold text-gray-700 mb-2">Lei nº 13.019/2014</p>
                  <p className="text-muted-foreground text-justify text-sm leading-relaxed mb-4">
                    Estabelece o regime jurídico das parcerias entre a administração pública e as organizações da sociedade civil, exigindo total transparência nas parcerias celebradas e na execução dos planos de trabalho.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* --- FIM DA NOVA SEÇÃO --- */}

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

        {/* Documentos Institucionais (Mantido igual) */}
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

        {/* Diretoria (Mantido igual) */}
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
                  <p className="text-lg text-muted-foreground">Viviane Rebello Schwartz Reginato</p>
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

    </div>
  );
};

export default Transparencia;