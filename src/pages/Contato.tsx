import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples de tamanho mínimo
    if (formData.telefone.length < 14) {
      toast.error("Por favor, preencha um telefone válido.");
      return;
    }

    // Simulação de envio
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  // Função auxiliar para mascarar o telefone (Padrão Brasileiro)
  const maskPhone = (value: string) => {
    // 1. Remove tudo que não for número
    let r = value.replace(/\D/g, "");

    // 2. Limita a 11 dígitos
    r = r.substring(0, 11);

    // 3. Aplica a formatação progressiva
    if (r.length > 10) {
      // (11) 91234-5678
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 6) {
      // (11) 9123-4567
      // IMPORTANTE: O terceiro grupo é (\d+) em vez de (\d{0,4})
      // Isso significa: só põe o traço se tiver digito depois
      r = r.replace(/^(\d\d)(\d{4})(\d+).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      // (11) 91...
      r = r.replace(/^(\d\d)(\d+).*/, "($1) $2");
    } else {
      if (r.length === 0) {
        return "";
      }
      else
        // (11...
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    if (name === "telefone") {
      // Se o usuário estiver apagando (o novo valor é menor que o antigo),
      // a gente deixa o comportamento padrão do input para evitar travar
      // (exceto se ele estiver colando algo ou digitando normal)

      // Mas com a máscara ajustada acima, apenas chamar maskPhone resolve 99% dos casos
      value = maskPhone(value);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-24 flex-grow bg-slate-50">

        {/* Header da Página */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container-custom text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Fale Conosco
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para ouvir você. Tire suas dúvidas, faça doações ou venha nos visitar.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-custom px-4">
            <div className="grid lg:grid-cols-12 gap-8 items-start">

              {/* COLUNA DA ESQUERDA: Formulário */}
              <div className="lg:col-span-7 animate-slide-in-left">
                <Card className="shadow-lg border-0 h-full">
                  <CardHeader className="border-b bg-white rounded-t-lg pb-6">
                    <CardTitle className="text-2xl text-primary">Envie sua mensagem</CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">
                      Preencha os campos abaixo e responderemos o mais breve possível.
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 bg-white rounded-b-lg">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome Completo *</label>
                          <Input
                            id="nome"
                            name="nome"
                            required
                            maxLength={100} // Limite de caracteres
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Ex: João da Silva"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                          <Input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            required
                            maxLength={15} // Limite da máscara (11) 99999-9999
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(18) 99999-9999"
                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail *</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          maxLength={100} // Limite de caracteres
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">Mensagem *</label>
                          <span className="text-xs text-muted-foreground">
                            {formData.mensagem.length}/500
                          </span>
                        </div>
                        <Textarea
                          id="mensagem"
                          name="mensagem"
                          required
                          maxLength={500} // Limite de caracteres
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Como podemos ajudar você hoje?"
                          rows={6}
                          className="bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white gap-2">
                        <Send size={20} className="mt-1" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* COLUNA DA DIREITA: Informações */}
              <div className="lg:col-span-5 space-y-6 animate-slide-in-right flex justify-between flex-col h-full">

                {/* Card Único de Informações de Contato */}
                <Card className="shadow-lg border-0 overflow-hidden">
                  <div className="bg-primary p-6 border-b border-primary/10">
                    <h3 className="font-bold text-xl text-primary flex items-center gap-2 text-white">
                      Informações de Contato
                    </h3>
                  </div>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-100">

                      {/* Endereço */}
                      <div className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Nosso Endereço</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Rua Mário César de Camargo, 1345<br />
                            Centro - Rancharia/SP<br />
                            CEP: 19600-025
                          </p>
                        </div>
                      </div>

                      {/* Contatos */}
                      <div className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                          <Phone size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Telefones & Email</h4>
                          <p className="text-gray-600 text-sm mb-1">(18) 3265-1200</p>
                          <p className="text-gray-600 text-sm">contato@larfranciscofranco.com.br</p>
                        </div>
                      </div>

                      {/* Horário */}
                      <div className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                          <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 17h</p>
                          <p className="text-gray-500 text-xs mt-1">Exceto feriados</p>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>

                {/* Card WhatsApp - Destaque */}
                <Card className="shadow-lg border-0 bg-[#25D366] text-white overflow-hidden relative group cursor-pointer hover:bg-[#20bd5a] transition-colors">
                  <a
                    href="https://wa.me/551832651200" // Substitua pelo número real se tiver
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <FaWhatsapp size={32} className="text-white" />
                      <div>
                        <h3 className="font-bold text-lg">WhatsApp</h3>
                        <p className="text-white/90 text-sm">Fale conosco em tempo real</p>
                      </div>

                    </div>
                  </a>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Seção do Mapa */}
        <section className="h-[400px] w-full bg-gray-200 relative shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.088899563258!2d-50.8953184!3d-22.2359556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94943b1a6a6f1d8b%3A0x6b8b8b8b8b8b8b8b!2sR.%20M%C3%A1rio%20C%C3%A9sar%20de%20Camargo%2C%201345%20-%20Centro%2C%20Rancharia%20-%20SP%2C%2019600-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Lar Francisco Franco"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-primary whitespace-nowrap">
            Rua Mário César de Camargo, 1345
          </div>
        </section>

      </main>
    </div>
  );
};

export default Contato;