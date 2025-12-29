import Image from "next/image";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight, ChevronRight } from "@hugeicons/core-free-icons";

const services = {
  "web-development": {
    title: "Desarrollo web",
    description: "Building responsive and modern web applications.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Friendly",
    ],
    icon: "🌐",
    image: '/blur/blur-1.avif',
  },
  "mobile-apps": {
    title: "Mobile Apps",
    description: "Creating user-friendly mobile applications for iOS and Android.",
    features: [
      "Cross-Platform",
      "User-Centric Design",
      "Push Notifications",
    ],
    icon: "📱",
    image: '/blur/blur-2.avif',
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences.",
    features: [
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
    image: '/blur/blur-3.avif',
    icon: "🎨",
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
                {services["web-development"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["web-development"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["web-development"].features.map((feature) => (
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
          <Image src={services["web-development"].image} alt="" objectFit="cover" fill={true}/>
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
                {services["web-development"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["web-development"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["web-development"].features.map((feature) => (
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
                {services["web-development"].title}
              </h3>
              <p className="text-sm sm:text-base">{services["web-development"].description}</p>
            </header>
            <ul className="list-disc ml-6 sm:ml-8 space-y-2 sm:space-y-4">
              {
                services["web-development"].features.map((feature) => (
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
          <Image src={services["ui-ux-design"].image} alt="" objectFit="cover" fill={true}/>
        </div>
      </div>
    </section>
  );
}