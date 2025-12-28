"use client"

import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import { GoogleDriveIcon, GoogleIcon, HelpCircleIcon, Menu01Icon, Moon01Icon, Moon02Icon, Search01Icon, SidebarLeft01Icon, SidebarLeftIcon} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import React from "react";
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

export function AppHeader() {
  const {theme, setTheme} = useTheme();

  return (
    <header className="w-full sticky top-0 left-0 h-16 bg-background z-50 px-6">
      <div className="size-full flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link href="/">
            <span className="font-semibold font-mono text-xl">
              Agents
            </span>
          </Link>
          <Button size="icon" variant="ghost" className="text-muted-foreground">
            <HugeiconsIcon icon={SidebarLeftIcon} strokeWidth={2} />
          </Button>
        </div>
        <div className="flex items-center justify-end gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="text-muted-foreground">
                <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="center">
              <DropdownMenuLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                  </InputGroupAddon>
                  <InputGroupInput placeholder="Busqueda..."/>
                </InputGroup>
              </DropdownMenuLabel>
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuGroup className="grid grid-cols-2">
                <DropdownMenuItem className="mr-auto" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
                  <HugeiconsIcon icon={Moon02Icon} strokeWidth={2} />
                </DropdownMenuItem>
                <DropdownMenuItem className="ml-auto">
                  <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact">
            <Button>Contactar ahora</Button>
          </Link>
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <HugeiconsIcon icon={SidebarRightIcon} strokeWidth={2.5} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="hidden">
                <SheetTitle>Sidebar</SheetTitle>
              </SheetHeader>
              <div className="">
                <Link href="/">Principal</Link>
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  );
}