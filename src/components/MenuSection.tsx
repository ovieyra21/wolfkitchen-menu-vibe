import { Card } from "@/components/ui/card";

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16">
      <Card className="bg-gradient-card border-wolf-border shadow-wolf p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-wolf-orange mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="border-b border-wolf-border pb-6 last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-wolf-orange mb-2">
                    {item.name}
                  </h3>
                  <p className="text-wolf-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-bold text-wolf-text">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};