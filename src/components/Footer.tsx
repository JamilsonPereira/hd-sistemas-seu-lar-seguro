import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold">HD Sistemas</span>
          </div>
          <p className="text-white/80 mb-6 max-w-md">
            Sua segurança é nossa prioridade. Soluções profissionais em monitoramento e controle de acesso.
          </p>
          <div className="border-t border-white/20 pt-6 w-full">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} HD Sistemas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
