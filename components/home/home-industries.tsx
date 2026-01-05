import { ArrowUpRight } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";

const data = [
  {
    title: 'Retail y Comercio Electrónico',
    description: 'Automatiza la gestión de inventarios y mejora la experiencia del cliente con soluciones personalizadas.',
    icon: '/retail.jpg',
  },
  {
    title: 'Manufactura y Producción',
    description: 'Incrementa la eficiencia de la producción y reduce costos operativos con tecnologías avanzadas.',
    icon: '/production.jpg',
  },
  {
    title: 'Logística y Transporte',
    description: 'Mejora la gestión de la cadena de suministro y optimiza rutas de entrega con soluciones inteligentes.',
    icon: '/transport.jpg',
  },
]

export function HomeIndustries() {
  return <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
    <h2 className="text-xl sm:text-2xl text-center px-4">Industria de todo rubro priorizan lo digital en sus procesos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
      {data.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 items-center">
          <div className="w-full h-74 relative rounded-md overflow-hidden">
            <Image src={item.icon} alt={item.title} fill={true} objectFit="cover" />

          </div>
          <div className="flex flex-col items-start gap-2 px-2 sm:px-0">
            <h3 className="text-base sm:text-lg">{item.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
          </div>
          <Button variant="outline" className="w-full sm:w-min mr-auto">
            Más información
            <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
          </Button>
        </div>
      ))}
    </div>
  </div>;
}