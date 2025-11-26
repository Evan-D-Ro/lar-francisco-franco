import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ValueCard = ({ title, description, icon: Icon }: ValueCardProps) => {
  return (
    <Card className="text-center shadow-card hover:shadow-hover transition-smooth border-2 border-transparent hover:border-secondary">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-soft">
          <Icon className="text-primary" size={32} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
