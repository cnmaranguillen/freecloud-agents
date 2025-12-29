"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const stack = [
  { name: "Next.js", light: "/companies/nextjs-light.svg", dark: "/companies/nextjs-dark.svg" },
  { name: "Open AI", light: "/companies/openai-light.svg", dark: "/companies/openai-dark.svg" },
  { name: "Supabase", light: "/companies/supabase-light.svg", dark: "/companies/supabase-dark.svg" },
  { name: "Cursor", light: "/companies/cursor-light.svg", dark: "/companies/cursor-dark.svg" },
  { name: "Vercel", light: "/companies/vercel-light.svg", dark: "/companies/vercel-dark.svg" },
]

export function HomeHero() {
  return (
    <div className="p-4 sm:p-8 md:p-12">
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        <div className="w-full text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Productos digitales basadas en ideas complejas</h2>
          <p className="text-base sm:text-lg">Desde una pagina web para promocionar tu pequeña empresa hasta un sistema de gestion de inventarios para tu nuevo negocio, ahora con IA integrada</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">Contactar ahora</Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">Obtener demo</Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] aspect-square">
            <DotLottieReact
              src="/render.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <Carousel className="mx-auto w-auto" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            {stack.map((tech) => (
              <CarouselItem key={tech.name} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-center">
                <Image 
                  src={tech.light} 
                  alt={tech.name} 
                  width={tech.name !== "Supabase" ? 85 : 135} 
                  height={50} 
                  className="inline-block mx-4 dark:hidden"/>
                <Image 
                  src={tech.dark} 
                  alt={tech.name} 
                  width={tech.name !== "Supabase" ? 85 : 135} 
                  height={50} 
                  className="hidden dark:inline-block mx-4"/>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}