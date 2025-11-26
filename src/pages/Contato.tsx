import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Entre em Contato
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para responder suas dúvidas e receber sua colaboração
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="animate-slide-in-left">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                          Telefone
                        </label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(18) 00000-0000"
                        />
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                          Mensagem *
                        </label>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          required
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Como podemos ajudar?"
                          rows={5}
                        />
                      </div>

                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="animate-slide-in-right space-y-6">
                <Card className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          Rua Exemplo, 123<br />
                          Centro - Rancharia/SP<br />
                          CEP: 19470-000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Telefone</h3>
                        <p className="text-muted-foreground">
                          (18) 3265-0000<br />
                          (18) 99999-9999 (WhatsApp)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">E-mail</h3>
                        <p className="text-muted-foreground">
                          contato@larfranciscofranco.org.br<br />
                          doacoes@larfranciscofranco.org.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 17h<br />
                          Sábados: 8h às 12h<br />
                          Domingos e Feriados: Fechado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-secondary" size={32} />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                        <p className="text-sm opacity-90 mb-4">
                          Fale conosco agora mesmo!
                        </p>
                        <Button variant="hero" className="w-full">
                          Iniciar Conversa
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Como Chegar
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="bg-secondary/20 rounded-lg overflow-hidden shadow-card" style={{ height: "400px" }}>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-secondary" size={48} />
                  <p>Mapa será integrado aqui</p>
                  <p className="text-sm mt-2">Rua Exemplo, 123 - Centro - Rancharia/SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
