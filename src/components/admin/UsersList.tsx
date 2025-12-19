import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function UsersList({ onEdit }: { onEdit: (user: any) => void }) {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const fetchUsers = async () => {
        setLoading(true);
        // AQUI É A MÁGICA: Chamamos a função que criamos no passo anterior
        const { data, error } = await supabase.functions.invoke('admin-users', {
            method: 'GET',
        });

        if (error) {
            toast({ title: "Erro ao carregar", description: error.message, variant: "destructive" });
        } else {
            setUsers(data.users || []);
        }
        setLoading(false);
    };

    const handleDelete = async (userId: string) => {
        if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

        const { error } = await supabase.functions.invoke('admin-users', {
            method: 'DELETE',
            body: { userId }
        });

        if (error) {
            toast({ title: "Erro ao excluir", description: error.message, variant: "destructive" });
        } else {
            toast({ title: "Sucesso", description: "Usuário excluído." });
            fetchUsers(); // Recarrega a lista
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Carregando usuários...</div>;

    return (
        <div className="bg-white rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Criado em</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                            <TableCell className="text-right gap-2 flex justify-end">
                                {/* Botão de Editar/Resetar senha */}
                                <Button variant="outline" size="sm" onClick={() => onEdit(user)}>
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete(user.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}