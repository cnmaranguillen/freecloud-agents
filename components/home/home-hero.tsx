"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const stack = [
  { name: "Next.js", light: "/companies/nextjs-light.svg", dark: "/companies/nextjs-dark.svg" },
  { name: "Open AI", light: "/companies/openai-light.svg", dark: "/companies/openai-dark.svg" },
  { name: "Supabase", light: "/companies/supabase-light.svg", dark: "/companies/supabase-dark.svg" },
  { name: "Cursor", light: "/companies/cursor-light.svg", dark: "/companies/cursor-dark.svg" },
  { name: "Vercel", light: "/companies/vercel-light.svg", dark: "/companies/vercel-dark.svg" },
]

export function HomeHero() {
  return (
    <div className="p-12">
      <div className="flex flex-col items-start gap-8">
        <div className="w-full text-center space-y-4">
          <h2 className="text-5xl">Productos digitales basadas en ideas complejas</h2>
          <p className="text-lg">Desde una pagina web para promocionar tu pequeña empresa hasta un sistema de gestion de inventarios para tu nuevo negocio, ahora con IA integrada</p>
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <Link href="/contact">
            <Button size="lg">Contactar ahora</Button>
          </Link>
          <Button variant="outline" size="lg">Obtener demo</Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <DotLottieReact
            src="/render.lottie"
            loop
            autoplay
            style={{ width: 350, height: 350 }}
          />
        </div>
        <Carousel className="mx-auto">
          <CarouselContent>
            {stack.map((tech) => (
              <CarouselItem key={tech.name} className="basis-1/5 flex items-center justify-center">
                <Image 
                  src={tech.light} 
                  alt={tech.name} 
                  width={tech.name !== "Supabase" ? 85 : 125} 
                  height={50} 
                  className="inline-block mx-4 dark:hidden"/>
                <Image 
                  src={tech.dark} 
                  alt={tech.name} 
                  width={tech.name !== "Supabase" ? 85 : 125} 
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