"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { CalendarDays, Ticket, Mail, Info } from "lucide-react";
export default function Barnav() {
  return (
    <div>
         <NavigationMenu>
          <NavigationMenuList className="gap-6 text-lg">
            <NavigationMenuItem>
              <Link href="/eventos" className="flex items-center gap-1 hover:text-orange-400 transition">
                <CalendarDays size={16} />
                FAQ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/mis-boletos" className="flex items-center gap-1 hover:text-orange-400 transition">
                <Ticket size={16} />
                Mis Boletos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" className="flex items-center gap-1 hover:text-orange-400 transition">
                <Mail size={16} />
                Contacto
              </Link>
            </NavigationMenuItem>
           
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}