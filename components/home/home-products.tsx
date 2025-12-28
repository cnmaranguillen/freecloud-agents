import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const products = [
  {
    title: "Apeshop Dash",
    description: "Gestiona y administra tu negocio desde cualquier parte, dashboard y POS moderno.",
    icon: "/blur/blur-1.avif",
    links: "https://apeshop-dashboard.vercel.app"
  },
]

export function HomeProducts() {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-2xl text-center">Productos de ultima generación desarrolados por nuestro equipo</h2>
      <div className={cn(products.length < 3 ? "flex items-center justify-center gap-4" : "grid grid-cols-4 gap-4")}>
        {products.map((item) => (
          <div key={item.title} className="max-w-xs flex flex-col gap-4 items-center">
            <div className="w-full aspect-square relative rounded-md overflow-hidden">
              <Image src={item.icon} alt={item.title} fill={true} objectFit="cover" />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="w-full flex items-center justify-start">
              <Link href={item.links} replace rel="noopener noreferrer" target="_blank">
                <Button variant="outline">
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