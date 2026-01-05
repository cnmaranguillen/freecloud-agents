import Link from "next/link";
import { Button } from "../ui/button";

export function HomeBanner() {
  return (
    <div className="rounded-md bg-muted/50 min-h-[300px] sm:h-96 w-full flex items-center justify-center flex-col gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl px-4">Da el gran salto hacia el digital en tu empresa o negocio, ahora con IA.</h2>
      <Link href="/contact">
        <Button size={"lg"} variant="outline" className="w-full sm:w-auto">Contactar ahora</Button>
      </Link>
    </div>
  );
}