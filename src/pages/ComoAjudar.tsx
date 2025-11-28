import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Gift, HandHeart, Briefcase, Heart, Phone, Mail, MapPin, Copy, Check, QrCode } from "lucide-react";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { toast } from "sonner"; // Assumindo que você usa sonner ou similar para toasts
import { FaWhatsapp } from "react-icons/fa";

const ComoAjudar = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("55687404000197");
    setCopiedPix(true);
    toast.success(`Chave pix copiada com sucesso!`);

    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
          <div className="container-custom text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Heart className="text-white fill-white/20" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Faça a Diferença
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Sua contribuição transforma o futuro de crianças e adolescentes. <br className="hidden md:block" />
              Veja como é simples apoiar o Lar Francisco Franco.
            </p>
          </div>
        </section>

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
                      <p className="text-sm text-muted-foreground mb-2">55.687.404/0001-97</p>
                      <Button size="sm" onClick={handleCopyPix}>
                        {copiedPix ? "Copiado!" : "Copiar Chave PIX"}
                      </Button>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Transferência Bancária</h3>
                      <p className="text-sm text-muted-foreground">
                        <strong>Banco:</strong> Banco do Brasil<br />
                        <strong>Agência:</strong> 0272-0<br />
                        <strong>Conta Corrente:</strong> 23178-9<br />
                        <strong>CNPJ:</strong> 55.687.404/0001-97
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
                      <p className="text-sm text-muted-foreground">Alimentos não perecíveis</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Material de Uso Diário</h4>
                      <p className="text-sm text-muted-foreground">Cadernos, lápis, mochilas, materiais básicos</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Brinquedos</h4>
                      <p className="text-sm text-muted-foreground">Brinquedos educativos e jogos</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-bold mb-1">Produtos de higiene</h4>
                      <p className="text-sm text-muted-foreground">Produtos para higiene pessoal ou para limpeza e manutenção da entidade.</p>
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

        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 p-12 opacity-5 transform translate-x-1/2 -translate-y-1/2">
            <Heart size={300} />
          </div>

          <div className="container-custom text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cada ajuda constrói um sonho
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Não importa o tamanho da sua doação. O que importa é o amor colocado nela.
              Junte-se a nós nessa missão de transformar vidas.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
              <Heart className="text-secondary fill-secondary" size={24} />
              <span className="font-medium">Obrigado por apoiar!</span>
            </div>
          </div>

        </section>
        {/* --- SEÇÃO DE CONTATO (Alterada para cor CLARA para quebrar a monotonia) --- */}
        <section className="section-padding bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Fale Conosco
              </h2>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                Tem alguma dúvida sobre doações ou quer agendar uma entrega? Nossa equipe está à disposição.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary border-2 hover:shadow-md transition-all flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-sm text-muted-foreground">(18) 3265-1200</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary border-2 hover:shadow-md transition-all flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                  <p className="text-sm text-muted-foreground">contato@larfranciscofranco.com.br</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary border-2 hover:shadow-md transition-all flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-sm text-muted-foreground">Rua Mário César de Camargo, 1345<br />Rancharia/SP</p>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://wa.me/551832651200" // Substitua pelo número real se tiver
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="xl" className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200 gap-2">
                    <Phone size={20} />
                    Fale pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL (Mantido Dark/Primary para fechar a página) */}

      </main>

    </div>
  );
};

export default ComoAjudar;