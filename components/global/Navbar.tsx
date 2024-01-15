"use client";

import { courseLinks, jobLinks } from "@/constants/navlinks";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavItem } from ".";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50 flex justify-between items-center px-8 md:px-16 lg:px-32 py-4 md:py-8">
      <div className="flex items-center gap-16">
        <Link href="/">
          <h3 className="text-4xl text-primary font-bold">lutra</h3>
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Getting Started
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Find a Job</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {jobLinks.map((jobLink) => (
                    <NavItem
                      key={jobLink.title}
                      title={jobLink.title}
                      href={jobLink.href}
                    >
                      {jobLink.description}
                    </NavItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Take a Course</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {courseLinks.map((courseLink) => (
                    <NavItem
                      key={courseLink.title}
                      title={courseLink.title}
                      href={courseLink.href}
                    >
                      {courseLink.description}
                    </NavItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="gap-2 hidden lg:flex">
        <Button variant="ghost" asChild>
          <Link href="/">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/">Sign Up</Link>
        </Button>
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={32} color="hsl(221.2 83.2% 53.3%)" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-primary text-left text-3xl font-bold">
              lutra
            </SheetHeader>
            <div className="flex flex-col mt-2">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="font-medium p-2 hover:bg-muted rounded"
                >
                  Getting Started
                </Link>
              </SheetClose>
              <SheetClose className="py-2" asChild>
                <>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="font-medium p-2 hover:bg-muted rounded"
                    >
                      Find a Job
                    </Link>
                  </SheetClose>

                  {jobLinks.map((jobLink) => (
                    <SheetClose
                      key={jobLink.title}
                      className="flex flex-col pl-4 py-1"
                      asChild
                    >
                      <Link
                        href="/"
                        className="text-muted-foreground hover:bg-muted rounded"
                      >
                        {jobLink.title}
                      </Link>
                    </SheetClose>
                  ))}
                </>
              </SheetClose>
              <SheetClose className="py-2" asChild>
                <>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="font-medium p-2 hover:bg-muted rounded"
                    >
                      Take a Course
                    </Link>
                  </SheetClose>

                  {courseLinks.map((courseLink) => (
                    <SheetClose
                      key={courseLink.title}
                      className="flex flex-col pl-4 py-1"
                      asChild
                    >
                      <Link
                        href="/"
                        className="text-muted-foreground hover:bg-muted rounded"
                      >
                        {courseLink.title}
                      </Link>
                    </SheetClose>
                  ))}
                </>
              </SheetClose>
              <SheetClose className="py-2" asChild>
                <Link
                  href="/"
                  className="font-medium p-2 hover:bg-muted rounded"
                >
                  About
                </Link>
              </SheetClose>

              <div className="gap-2 flex justify-between mt-8">
                <Button variant="secondary" asChild>
                  <SheetClose asChild>
                    <Link href="/" className="flex-1">
                      Login
                    </Link>
                  </SheetClose>
                </Button>
                <Button asChild>
                  <SheetClose asChild>
                    <Link href="/" className="flex-1">
                      Sign Up
                    </Link>
                  </SheetClose>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
