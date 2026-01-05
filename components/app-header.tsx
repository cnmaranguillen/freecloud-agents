"use client"

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { DarkModeIcon, GoogleDriveIcon, GoogleIcon, HelpCircleIcon, Menu01Icon, Moon01Icon, Moon02Icon, Search01Icon, SidebarLeft01Icon, SidebarLeftIcon, Sun02Icon, User02Icon} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import React, { useState } from "react";
import { useEffect } from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Separator } from "./ui/separator";

const navigationItems = [
  { name: "Principal", href: "/" },
  { name: "Características", href: "/features" },
  { name: "Precios", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

const IsoIcon = ({ className }: { className?: string }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="508.000000pt"
    height="491.000000pt"
    viewBox="0 0 508.000000 491.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,491.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M2288 4615 c-196 -32 -420 -130 -569 -248 -239 -190 -403 -463 -455 -762 -25 -141 -14 -428 21 -555 47 -171 132 -341 262 -521 60 -85 141 -179 153 -179 4 0 10 41 13 91 10 141 82 388 154 533 117 236 325 449 595 610 340 203 626 285 991 286 l157 0 -31 63 c-56 112 -137 226 -225 317 -173 179 -368 292 -608 351 -108 27 -338 34 -458 14z" />
      <path d="M3305 3594 c-213 -32 -400 -89 -580 -178 -121 -60 -315 -180 -315 -195 0 -4 52 -15 115 -25 248 -39 465 -122 670 -256 391 -257 678 -642 799 -1072 42 -149 57 -357 35 -503 -6 -42 -9 -78 -6 -81 10 -10 152 63 249 128 233 156 417 417 490 697 29 108 31 128 31 296 0 170 -2 187 -31 298 -54 208 -156 384 -304 530 -49 48 -102 95 -116 105 -15 9 -43 29 -62 44 -84 64 -245 136 -404 180 -105 28 -123 30 -326 33 -118 2 -228 1 -245 -1z" />
      <path d="M873 3484 c-119 -62 -203 -123 -299 -219 -144 -143 -258 -345 -310 -550 -26 -100 -28 -126 -28 -285 0 -186 8 -241 59 -389 51 -150 200 -382 297 -462 23 -20 63 -54 88 -74 149 -124 346 -217 545 -256 109 -22 436 -19 550 5 211 44 427 133 610 251 86 55 203 145 204 156 1 3 -50 11 -111 18 -330 33 -643 184 -926 447 -144 132 -307 349 -396 524 -126 249 -176 450 -176 716 0 100 -4 164 -10 164 -5 0 -49 -21 -97 -46z" />
      <path d="M3257 2452 c-13 -236 -61 -418 -158 -601 -73 -136 -116 -195 -211 -291 -167 -168 -314 -272 -543 -385 -273 -134 -487 -191 -761 -202 -85 -3 -154 -10 -154 -15 0 -18 50 -105 101 -178 80 -113 258 -282 359 -339 176 -101 334 -153 519 -172 214 -21 453 15 624 94 210 98 378 239 509 427 106 153 146 247 190 443 30 135 32 411 5 527 -57 241 -128 390 -288 605 -66 88 -168 205 -180 205 -3 0 -9 -53 -12 -118z" />
    </g>
  </svg>
);

export function AppHeader() {
  const {theme, setTheme} = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 left-0 h-16 bg-background z-50 px-4 sm:px-6">
      <div className="size-full grid grid-cols-3 items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <IsoIcon className="size-10 sm:size-[22.5px] text-primary" />
            <span className={`font-semibold font-mono text-lg sm:text-xl ${isScrolled && "hidden"}`}>
              Agentes
            </span>
          </Link>
          <Button size="icon" variant="ghost" onClick={() => setTheme(theme == "dark" ? "light" : "dark")} className="text-muted-foreground">
            <HugeiconsIcon icon={Sun02Icon} strokeWidth={2} className="block dark:hidden" />
            <HugeiconsIcon icon={Moon02Icon} strokeWidth={2} className="hidden dark:block" />
          </Button>
        </div>
        <div>
          {
            isScrolled && (
              <NavigationMenu className="mx-auto">
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.href}>
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )
          }
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            Soporte
          </Button>
          <Link href="/contact">
            <Button className="hidden sm:inline-flex">Contactar ahora</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}