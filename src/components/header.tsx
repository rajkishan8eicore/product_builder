import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems, viewMoreItems } from "@/data/navItems";
import { user } from "@/data/user";

export default function Header() {
  return (
    <div className="w-full border-b px-6 py-4 flex items-center justify-between shadow-sm">
     
      <div className="flex items-center gap-6">
        <img src="/eicore.png" alt="Logo" className="h-10" />

        
        <NavigationMenu>
          <NavigationMenuList className="flex gap-x-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <a href="#">{item}</a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>View More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-48">
                  {viewMoreItems.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      
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
