import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Equipamentos de última geração",
  "Equipe técnica especializada e certificada",
  "Atendimento personalizado",
  "Projetos customizados para cada necessidade",
  "Instalação rápida e profissional",
  "Suporte técnico sempre disponível",
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white" id="sobre">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a HD Sistemas?
            </h2>
            <p className="text-lg text-white/90">
              Experiência e compromisso com a sua segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg leading-relaxed text-white/90">
              A <span className="font-bold text-white">HD Sistemas</span> é especializada em fornecer soluções 
              completas de segurança eletrônica. Com anos de experiência no mercado, nossa equipe está 
              preparada para atender desde pequenas residências até grandes empresas, sempre com 
              equipamentos de primeira linha e um serviço de excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
