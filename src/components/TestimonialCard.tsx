import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-smooth">
      <CardContent className="p-8">
        <Quote className="text-secondary mb-4" size={32} />
        <p className="text-foreground italic mb-6 leading-relaxed">{quote}</p>
        <div className="border-t border-border pt-4">
          <p className="font-bold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};
