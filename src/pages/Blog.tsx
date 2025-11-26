import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Celebração do Dia das Crianças 2024",
    excerpt: "Foi um dia especial repleto de atividades, brincadeiras e muita alegria para todas as nossas meninas.",
    date: "12 de Outubro, 2024",
    author: "Equipe LFF",
    category: "Eventos",
  },
  {
    id: 2,
    title: "Parceria com a Universidade Local",
    excerpt: "Firmamos uma nova parceria que trará oficinas e atividades complementares para o desenvolvimento das meninas.",
    date: "5 de Outubro, 2024",
    author: "Diretoria",
    category: "Parcerias",
  },
  {
    id: 3,
    title: "Campanha de Inverno 2024",
    excerpt: "Nossa campanha de arrecadação de roupas de frio foi um sucesso! Agradecemos a todos os doadores.",
    date: "15 de Junho, 2024",
    author: "Equipe LFF",
    category: "Campanhas",
  },
  {
    id: 4,
    title: "Formatura do Ensino Fundamental",
    excerpt: "Três das nossas meninas se formaram no Ensino Fundamental. Um momento de muita emoção e orgulho!",
    date: "20 de Dezembro, 2023",
    author: "Equipe LFF",
    category: "Conquistas",
  },
  {
    id: 5,
    title: "Novo Espaço de Leitura",
    excerpt: "Inauguramos nossa nova biblioteca com mais de 500 livros doados pela comunidade.",
    date: "10 de Novembro, 2023",
    author: "Equipe LFF",
    category: "Novidades",
  },
  {
    id: 6,
    title: "Passeio ao Museu",
    excerpt: "As meninas visitaram o museu da cidade e participaram de atividades culturais enriquecedoras.",
    date: "25 de Setembro, 2023",
    author: "Educadores",
    category: "Atividades",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Blog e Notícias
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Fique por dentro das nossas atividades, eventos e novidades
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group cursor-pointer"
                >
                  <div className="h-48 bg-secondary" />
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Ler mais <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Receba Nossas Novidades
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Cadastre-se para receber notícias e atualizações sobre nosso trabalho
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="hero" size="lg">
                Inscrever-se
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
