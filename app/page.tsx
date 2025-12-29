import { HomeBanner } from "@/components/home/home-banner";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeProducts } from "@/components/home/home-products";
import { HomeServices } from "@/components/home/home-services";

export default function Page() {
return (
  <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 mb-12 sm:mb-16 md:mb-20 container mx-auto px-4 sm:px-6 lg:px-8">
    <HomeHero/>
    <HomeIndustries/>
    <HomeServices/>
    <HomeBanner/>
    <HomeProducts/>
  </div>
)
}