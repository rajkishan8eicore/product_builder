import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/data/navItems"; 
import { user } from "@/data/user"; 

export default function Header() {
  return (
    <div className="w-full bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Left side: Logo + Nav */}
      <div className="flex items-center gap-6">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <NavigationMenu>
          <NavigationMenuList className="gap-3 text-sm text-gray-700">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <a
                  href="#"
                  className={`hover:text-blue-600 ${
                    item === "Master" ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {item}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {}
      <div className="flex flex-col items-end text-sm text-gray-600">
        <span>Welcome - | {user.lastLogin}</span>
        <span>Last Login Time - | Role: {user.role} | Branch -</span>
        <Button variant="outline" size="sm" className="mt-1 text-xs">
          Logout
        </Button>
      </div>
    </div>
  );
}
