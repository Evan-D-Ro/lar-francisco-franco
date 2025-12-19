import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NoticiaDetalhes = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lógica do carrossel automático
    useEffect(() => {
        if (!noticia || !noticia.imagens || noticia.imagens.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % noticia.imagens.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [noticia]);

    // Busca da notícia
    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const jaVisualizada = sessionStorage.getItem(`noticia_${id}`);
                const res = await fetch(
                    `https://aprovacao.larfranciscofranco.com.br/noticia.php?id=${id}${!jaVisualizada ? "&increment=true" : ""}`
                );
                const data = await res.json();
                setNoticia(data);

                if (!jaVisualizada) sessionStorage.setItem(`noticia_${id}`, "true");
            } catch (error) {
                console.error("Erro ao buscar notícia:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNoticia();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
        );
    }

    if (!noticia)
        return (
            <div className="text-center p-12">
                <h1 className="text-2xl font-bold">Notícia não encontrada</h1>
                <Link to="/noticias">
                    <Button
                        variant="outline"
                        className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Button>
                </Link>
            </div>
        );

    return (
        <div className="container mx-auto px-4 pt-8 pb-12 max-w-4xl">
            {/* Voltar */}
            <Link to="/noticias">
                <Button
                    variant="ghost"
                    className="mb-6 pl-0 hover:bg-transparent hover:text-primary text-muted-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Notícias
                </Button>
            </Link>

            {/* Carrossel */}
            {noticia.imagens?.length > 0 && (
                <section className="relative mb-8 w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-md group">
                    {noticia.imagens.map((img: string, idx: number) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${noticia.titulo} - imagem ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    ))}

                    {/* Botões de navegação e Indicadores */}
                    {noticia.imagens.length > 1 && (
                        <div className="z-20 relative h-full">
                            <button
                                onClick={() =>
                                    setCurrentSlide(
                                        currentSlide === 0
                                            ? noticia.imagens.length - 1
                                            : currentSlide - 1
                                    )
                                }
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>

                            <button
                                onClick={() =>
                                    setCurrentSlide((currentSlide + 1) % noticia.imagens.length)
                                }
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {noticia.imagens.map((_: any, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`transition-all duration-300 rounded-full shadow-sm ${idx === currentSlide
                                            ? "bg-white w-6 h-2"
                                            : "bg-white/50 w-2 h-2 hover:bg-white/80"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* Cabeçalho */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {noticia.titulo}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {(() => {
                            if (!noticia.data) return "";
                            const [ano, mes, dia] = noticia.data.split("-");
                            const data = new Date(
                                Number(ano),
                                Number(mes) - 1,
                                Number(dia)
                            );
                            return data.toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            });
                        })()}
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <Card className="border-none shadow-none sm:shadow-sm sm:border">
                {/* AJUSTE 1: Alterado de 'p-0 sm:p-8' para 'px-2 py-4 sm:p-8' 
                    Isso adiciona padding no mobile para o texto não colar na borda.
                    Se quiser mais espaço, use 'px-4' ou 'px-5'.
                */}
                <CardContent className="px-2 py-4 sm:p-8">
                    {noticia.descricao && (
                        // AJUSTE 2: Adicionei margem negativa leve ou padding extra se necessário, 
                        // mas com o padding do CardContent acima, o blockquote já vai respirar.
                        <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 text-lg italic text-gray-700 bg-gray-50 rounded-r-lg">
                            {noticia.descricao}
                        </blockquote>
                    )}

                    {/* AJUSTE 3: Mantido o prose, o padding do pai (CardContent) resolve as margens laterais */}
                    <div className="prose prose-lg prose-gray max-w-none text-justify leading-relaxed text-gray-800 whitespace-pre-line break-words">
                        {noticia.conteudo}
                    </div>

                    <p className="text-right mt-12 text-sm text-muted-foreground font-medium italic border-t pt-4">
                        — Equipe Lar Francisco Franco
                    </p>
                </CardContent>
            </Card>

            {/* Rodapé */}
            <div className="text-center mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Gostou desta notícia?
                </h3>
                <p className="text-muted-foreground mb-8">
                    Acompanhe todas as novidades e atividades do Lar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <Link to="/noticias" className="w-full sm:w-auto">
                        <Button
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            Ver Mais Notícias
                        </Button>
                    </Link>
                    <Link to="/fale-conosco" className="w-full sm:w-auto">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Entre em Contato
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoticiaDetalhes;