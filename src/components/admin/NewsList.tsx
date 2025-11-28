import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface NewsListProps {
  onEdit: (news: any) => void;
}

export function NewsList({ onEdit }: NewsListProps) {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null); // Estado para controlar qual ID será deletado
  const { toast } = useToast();

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/noticias.php?limit=10");
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const data = await response.json();
      if (data.error) throw new Error(data.details?.message || data.error);

      setNews(data.noticias || []);
    } catch (error: any) {
      console.error("Erro no fetch:", error);
      toast({
        title: "Erro ao carregar notícias",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Função para deletar chamando o PHP
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      // Chama o endpoint PHP com método DELETE
      const response = await fetch(`/api/noticias.php?id=${deleteId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Erro ao deletar");
      }

      toast({
        title: "Notícia deletada",
        description: "A notícia foi removida com sucesso.",
      });

      // Atualiza a lista localmente removendo o item deletado (sem precisar dar refresh)
      setNews((prev) => prev.filter((item) => item.id !== deleteId));

    } catch (error: any) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setDeleteId(null); // Fecha o modal
    }
  };

  if (loading) return <div className="p-8 text-center">Carregando...</div>;

  if (news.length === 0) {
    return (
      <Card className="p-12 text-center">
        <p className="text-muted-foreground">Nenhuma notícia encontrada.</p>
      </Card>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {item.imagem ? (
              <div className="h-48 overflow-hidden bg-muted">
                <img src={item.imagem} alt={item.titulo} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">Sem imagem</div>
            )}

            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-lg line-clamp-2">{item.titulo}</h3>

                {/* Botões de Ação restaurados */}
                <div className="flex gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(item)}
                    className="h-8 w-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setDeleteId(item.id)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">{item.descricao}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{item.data ? new Date(item.data).toLocaleDateString("pt-BR") : "-"}</span>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {item.visualizacoes}
                </div>
              </div>

              <div className="flex gap-1 flex-wrap">
                {item.categoria?.map((cat: string, i: number) => (
                  <Badge key={i} variant="secondary" className="text-xs">{cat}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal de confirmação restaurado */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja deletar esta notícia? Ela será movida para a lixeira do Notion.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Deletar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}