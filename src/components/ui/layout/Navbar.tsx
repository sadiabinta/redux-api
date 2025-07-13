import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 border-b shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-900">Book Store</div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-sm font-medium hover:underline"
              >
                All Books
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/create-book"
                className="text-sm font-medium hover:underline"
              >
                Add Book
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/borrow-summary"
                className="text-sm font-medium hover:underline"
              >
                Borrow Summary
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
