import { Card, CardContent } from "@/components/ui/card";
import { Camera, ShieldAlert, KeyRound, Settings, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Câmeras de Vigilância",
    description: "Instalação e manutenção de sistemas CFTV com câmeras de alta resolução e monitoramento 24/7.",
  },
  {
    icon: ShieldAlert,
    title: "Sistemas de Alarme",
    description: "Alarmes inteligentes conectados para proteção total de sua propriedade contra invasões.",
  },
  {
    icon: KeyRound,
    title: "Controle de Acesso",
    description: "Sistemas modernos de controle de acesso com biometria, cartões e reconhecimento facial.",
  },
  {
    icon: Settings,
    title: "Manutenção Preventiva",
    description: "Serviços regulares de manutenção para garantir o funcionamento ideal dos seus sistemas.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Atendimento disponível a qualquer momento para emergências e suporte técnico.",
  },
  {
    icon: Award,
    title: "Garantia de Qualidade",
    description: "Todos os nossos serviços e equipamentos possuem garantia e certificação de qualidade.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em segurança eletrônica para proteger o que é mais importante para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
