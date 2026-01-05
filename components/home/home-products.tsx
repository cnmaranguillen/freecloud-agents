import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const products = [
  {
    title: "Kapok App",
    description: "Gestiona y administra tu negocio desde cualquier parte del mundo.",
    icon: "/kapok.png",
    links: "https://apeshop-dashboard.vercel.app"
  },
  {
    title: "Dribum App",
    description: "Gestiona y administra en tiempo real tus contratos de forma digital y segura.",
    icon: "/dribum.png",
    links: "https://apeshop-dashboard.vercel.app"
  },
]

export function HomeProducts() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
      <h2 className="text-xl sm:text-2xl text-center px-4">Productos de ultima generación desarrolados por nuestro equipo</h2>
      <div className={cn(products.length < 3 ? "mx-auto flex items-center justify-center gap-6 max-md:flex-col" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6")}>
        {products.map((item) => (
          <div key={item.title} className="max-w-xs w-full mx-auto flex flex-col gap-4 items-center">
            <div className="w-full h-64 relative rounded-md overflow-hidden">
              <Image src={item.icon} alt={item.title} fill={true} objectFit="cover" />
            </div>
            <div className="w-full flex flex-col items-start gap-2 px-2 sm:px-0">
              <h3 className="text-base sm:text-lg">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="w-full flex items-center justify-start px-2 sm:px-0">
              <Link href={item.links} replace rel="noopener noreferrer" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  Ir al producto
                  <HugeiconsIcon icon={ArrowUpRight} strokeWidth={2}/>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}