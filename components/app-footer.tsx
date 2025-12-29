import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { EarthIcon, Facebook01Icon, InstagramIcon, InternetIcon, ThreadIcon, ThreadsIcon } from "@hugeicons/core-free-icons";

export function AppFooter() {
  return (
    <footer className="w-full static bottom-0 left-0">
      <div className="container mx-auto py-6 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 items-center">
        <div className="flex items-center justify-center sm:justify-start">
          <Button size="icon" variant="ghost">
            <HugeiconsIcon icon={InstagramIcon} strokeWidth={2} />
          </Button>
          <Button size="icon" variant="ghost">
            <HugeiconsIcon icon={Facebook01Icon} strokeWidth={2} />
          </Button>
          <Button size="icon" variant="ghost">
            <HugeiconsIcon icon={ThreadsIcon} strokeWidth={2} />
          </Button>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground text-center">© 2025 FreeCloud Agents. Todos los derechos reservados.</span>
        <div className="flex justify-center sm:justify-end">
          <Button variant="secondary" className="ml-auto max-md:mx-auto">
            <HugeiconsIcon icon={InternetIcon} strokeWidth={2} /> Lima, Perú
            <span className="text-muted-foreground">Español</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}