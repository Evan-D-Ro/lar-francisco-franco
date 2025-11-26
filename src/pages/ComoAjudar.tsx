import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Gift, HandHeart, Briefcase, Heart, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ComoAjudar = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("chavepix@larfranciscofranco.org.br");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding gradient-primary">
          <div className="container-custom text-center">
            <Heart className="mx-auto mb-6 text-primary" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Como Você Pode Ajudar
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Sua contribuição faz toda a diferença na vida das crianças e adolescentes acolhidos. Existem diversas formas de apoiar nosso trabalho.
            </p>
          </div>
        </section>

        {/* Formas de Ajudar */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-soft">
                    <DollarSign className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Doações Financeiras</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    As doações financeiras são fundamentais para manter nossos programas e garantir o bem-estar das meninas. 
                    Você pode contribuir mensalmente ou fazer uma doação única.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold mb-2">PIX (CNPJ)</h3>
                      <p className="text-sm text-muted-foreground mb-2">12.345.678/0001-90</p>
                      <Button size="sm" onClick={handleCopyPix}>
                        {copiedPix ? "Copiado!" : "Copiar Chave PIX"}
                      </Button>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Transferência Bancária</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Banco:</strong> Banco do Brasil<br />
                        <strong>Agência:</strong> 1234-5<br />
                        <strong>Conta Corrente:</strong> 12345-6<br />
                        <strong>CNPJ:</strong> 12.345.678/0001-90
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-soft">
                    <Gift className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Doações de Materiais</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Aceitamos doações de diversos itens essenciais para o dia a dia das crianças e adolescentes acolhidos.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Vestuário</h4>
                      <p className="text-sm text-muted-foreground">Roupas, calçados e acessórios em bom estado</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Alimentos</h4>
                      <p className="text-sm text-muted-foreground">Alimentos não perecíveis e produtos de higiene</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Material de Uso Diário</h4>
                      <p className="text-sm text-muted-foreground">Cadernos, lápis, mochilas, materiais básicos</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Brinquedos</h4>
                      <p className="text-sm text-muted-foreground">Brinquedos educativos e jogos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-soft">
                    <HandHeart className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Voluntariado</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Doe seu tempo, conhecimento e talento. Precisamos de voluntários em diversas áreas.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Oficinas e atividades (arte, música, esporte)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Apoio nas atividades diárias</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Atividades recreativas e passeios</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Apoio administrativo e comunicação</p>
                    </div>
                  </div>

                  <Button className="mt-6 w-full" variant="cta">
                    Quero Ser Voluntário
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 shadow-soft">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Parcerias Empresariais</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Empresas podem contribuir de diversas formas, inclusive com benefícios fiscais para doações a OSCs.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Patrocínio de eventos e projetos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Doações de produtos e serviços</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Programas de voluntariado corporativo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Campanhas de arrecadação</p>
                    </div>
                  </div>

                  <Button className="mt-6 w-full" variant="outline">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contato para Doações */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Tem Dúvidas? Entre em Contato
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Nossa equipe está pronta para ajudar você a escolher a melhor forma de contribuir
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="text-secondary" size={32} />
                  <p className="text-sm text-primary-foreground/90">(18) 3265-0000</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="text-secondary" size={32} />
                  <p className="text-sm text-primary-foreground/90">contato@larfranciscofranco.org.br</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="text-secondary" size={32} />
                  <p className="text-sm text-primary-foreground/90">Rua Exemplo, 123 - Rancharia/SP</p>
                </div>
              </div>

              <Button size="xl" variant="hero" className="mt-8">
                Fale Conosco pelo WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cada Contribuição Conta
            </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Não importa o tamanho da sua doação. O que importa é que juntos podemos transformar vidas e construir futuros melhores para crianças e adolescentes.
              </p>
            <Heart className="mx-auto text-secondary fill-secondary" size={48} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComoAjudar;
