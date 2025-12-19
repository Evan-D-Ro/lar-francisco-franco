import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface UserDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    editingUser?: any;
    onSuccess: () => void;
}

export function UserDialog({ open, onOpenChange, editingUser, onSuccess }: UserDialogProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Se tiver editingUser, seria lógica de update (não implementada no exemplo simples)
        // Aqui faremos apenas CRIAÇÃO para simplificar

        const { error } = await supabase.functions.invoke('admin-users', {
            method: 'POST',
            body: { email, password }
        });

        setLoading(false);

        if (error) {
            toast({ title: "Erro", description: error.message, variant: "destructive" });
        } else {
            toast({ title: "Sucesso", description: "Usuário criado com sucesso!" });
            onOpenChange(false);
            onSuccess(); // Avisa o pai para recarregar a lista
            setEmail("");
            setPassword("");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{editingUser ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Salvando...' : 'Salvar Usuário'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}