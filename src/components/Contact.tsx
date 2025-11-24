import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511977054507"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://www.instagram.com/hdsistemaseguranca/"; // Substitua pelo Instagram real

  return (
    <section className="py-20 bg-background" id="contato">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Solicite um orçamento sem compromisso. Estamos prontos para atender você!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Button 
              size="lg"
              className="h-auto py-6 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="h-auto py-6 px-8 text-lg border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
              onClick={() => window.open(instagramUrl, '_blank')}
            >
              <Instagram className="w-6 h-6 mr-3" />
              Instagram
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3 p-6 rounded-lg bg-card border">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-card border">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">E-mail</h3>
                <p className="text-sm text-muted-foreground">contato@hdsistemas.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-card border">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Atendimento</h3>
                <p className="text-sm text-muted-foreground">Grande São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
