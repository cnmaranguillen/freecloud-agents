import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight, ChevronRight } from "@hugeicons/core-free-icons";

const services = {
  "web-sites": {
    title: "Sitios web",
    description: "Sitios web modernos y visibles para incrementar la visibilidad de tu negocio.",
    features: [
      "Diseño para dispositivos móviles",
      "Optimización para SEO",
      "Integración con redes sociales",
    ],
    icon: "🌐",
    image: '/website.avif',
  },
  "mobile-apps": {
    title: "Aplicaciones móviles",
    description: "Aplicaciones móviles de alto rendimiento para iOS y Android.",
    features: [
      "Diseño moderno y fluido",
      "Integración con servicios de terceros",
      "Maximo rendimiento y seguridad",
    ],
    icon: "📱",
    image: '/mobile.avif',
  },
  "automation": {
    title: "Automatizaciónes",
    description: "Mejora de eficiencia y productividad en procesos manuales.",
    features: [
      "Consumo optimizado de recursos",
      "Seguridad y privacidad",
      "Mantenimiento y actualizaciones",
    ],
    image: '/automation.avif',
    icon: "🤖",
  },
  "web-apps": {
    title: "Aplicaciones web",
    description: "Administración y gestión de tu negocio desde cualquier parte del mundo.",
    features: [
      "Diseño moderno y personalizado",
      "Integración con servicios de terceros",
      "Mantenimiento y actualizaciones",
    ],
    icon: "💻",
    image: '/web-app.avif',
  },
};

export function HomeServices() {
  return (
    <section className="flex flex-col gap-8 sm:gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className="flex flex-col gap-4 sm:gap-6">
            <header className="space-y-2">
              <h3 className="text-2xl sm:text-3xl">
                {services["web-sites"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["web-sites"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["web-sites"].features.map((feature) => (
                  <li key={feature} className="text-sm sm:text-base">{feature}</li>
                ))
              }
            </ul>
            <footer className="flex flex-col gap-2">
              <Button variant="outline" className="w-full sm:w-min">
                Solicitar servicio ahora 
                <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
              </Button>
              <Button variant="secondary" className="w-full sm:w-min">
                Obtener información 
                <HugeiconsIcon icon={ChevronRight} strokeWidth={2}/>
              </Button>
            </footer>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md aspect-square order-1 lg:order-2">
          <Image src={services["web-sites"].image} alt="" objectFit="cover" fill={true}/>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="relative overflow-hidden rounded-md aspect-square">
          <Image src={services["mobile-apps"].image} alt="" objectFit="cover" fill={true}/>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:gap-8">
            <header className="space-y-2">
              <h3 className="text-2xl sm:text-3xl">
                {services["mobile-apps"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["mobile-apps"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["mobile-apps"].features.map((feature) => (
                  <li key={feature} className="text-sm sm:text-base">{feature}</li>
                ))
              }
            </ul>
            <footer className="flex flex-col gap-2">
              <Button variant="outline" className="w-full sm:w-min">
                Solicitar servicio ahora 
                <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
              </Button>
              <Button variant="secondary" className="w-full sm:w-min">
                Obtener información 
                <HugeiconsIcon icon={ChevronRight} strokeWidth={2}/>
              </Button>
            </footer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className="flex flex-col gap-4 sm:gap-8">
            <header className="space-y-2">
              <h3 className="text-2xl sm:text-3xl">
                {services["automation"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["automation"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["automation"].features.map((feature) => (
                  <li key={feature} className="text-sm sm:text-base">{feature}</li>
                ))
              }
            </ul>
            <footer className="flex flex-col gap-2">
              <Button variant="outline" className="w-full sm:w-min">
                Solicitar servicio ahora 
                <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
              </Button>
              <Button variant="secondary" className="w-full sm:w-min">
                Obtener información 
                <HugeiconsIcon icon={ChevronRight} strokeWidth={2}/>
              </Button>
            </footer>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md aspect-square order-1 lg:order-2">
          <Image src={services["automation"].image} alt="" objectFit="cover" fill={true}/>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="relative overflow-hidden rounded-md aspect-square">
          <Image src={services["web-apps"].image} alt="" objectFit="cover" fill={true}/>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:gap-8">
            <header className="space-y-2">
              <h3 className="text-2xl sm:text-3xl">
                {services["web-apps"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["web-apps"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["web-apps"].features.map((feature) => (
                  <li key={feature} className="text-sm sm:text-base">{feature}</li>
                ))
              }
            </ul>
            <footer className="flex flex-col gap-2">
              <Button variant="outline" className="w-full sm:w-min">
                Solicitar servicio ahora 
                <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
              </Button>
              <Button variant="secondary" className="w-full sm:w-min">
                Obtener información 
                <HugeiconsIcon icon={ChevronRight} strokeWidth={2}/>
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}