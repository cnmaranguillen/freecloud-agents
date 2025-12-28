import { HomeBanner } from "@/components/home/home-banner";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeProducts } from "@/components/home/home-products";
import { HomeServices } from "@/components/home/home-services";

export default function Page() {
return (
  <div className="space-y-24 mb-20 container mx-auto">
    <HomeHero/>
    <HomeIndustries/>
    <HomeServices/>
    <HomeBanner/>
    <HomeProducts/>
  </div>
)
}