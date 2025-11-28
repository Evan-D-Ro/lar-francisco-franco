import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

export const ProgramCard = ({ title, description, icon: Icon, image, className }: ProgramCardProps) => {
  return (
    <Card className={cn("group overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer", className)}>
      {image && (
        <div className="relative h-96 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-smooth">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
