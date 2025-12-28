import Link from "next/link";
import { Button } from "../ui/button";

export function HomeBanner() {
  return (
    <div className="rounded-md bg-input/30 h-96 w-full flex items-center justify-center flex-col gap-8 p-12">
      <h2 className="text-5xl text-center max-w-3xl">Da el gran salto hacia el digital en tu empresa o negocio, ahora con IA.</h2>
      <Link href="/contact">
        <Button size={"lg"} variant="outline">Contactar ahora</Button>
      </Link>
    </div>
  );
}