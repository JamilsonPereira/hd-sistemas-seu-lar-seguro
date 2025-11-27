import { Button } from "@/components/ui/button";
import { Shield, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  const whatsappNumber = "5511977054507"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da HD Sistemas.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/70 z-10" />
        <img 
          src={heroImage} 
          alt="Sistemas de Segurança HD" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Segurança Profissional</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            HD Sistemas
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
            Instalação e Manutenção de Sistemas de Segurança
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Câmeras de vigilância, sistemas de alarme e controle de acesso para sua empresa ou residência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
