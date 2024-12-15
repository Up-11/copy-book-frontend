"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/modals/navigation-menu";
import { BookKey, Code2, LayoutList } from "lucide-react";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/lib/css";
import { MenuItemType } from "../nav-menu.types";
import { menuDataStudent } from "../menu.data";

export const UiNavigationMenu = () => {
  const renderMenuItems = (
    items: MenuItemType[],
    icon: React.ReactNode,
    title: string,
    description: string,
  ) => {
    return (
      <>
        <TallMenuItem
          href={routes.mainStudent}
          title={title}
          description={description}
          icon={icon}
        />
        {items.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            title={item.title}
            description={item.description}
          />
        ))}
      </>
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Задания</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {renderMenuItems(
                menuDataStudent[0].items,
                <LayoutList />,
                "Ваши задания",
                "Посмотрите список ваших заданий",
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Песочница</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {renderMenuItems(
                menuDataStudent[1].items,
                <Code2 />,
                "Песочница",
                "Потренеруйтесь в самостоятельном написании кода в песочнице",
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Курсы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {renderMenuItems(
                menuDataStudent[2].items,
                <BookKey />,
                "Ваши курсы",
                "Посмотрите список курсов которые вы проходите",
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const TallMenuItem: React.FC<MenuItemType> = ({
  href,
  title,
  description,
  icon,
}) => (
  <li className="row-span-3">
    <NavigationMenuLink asChild>
      <Link
        className={cn(
          "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
        )}
        href={href}
      >
        {icon}
        <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
        <p className="text-sm leading-tight text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
);

const MenuItem: React.FC<MenuItemType> = ({ href, title, description }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        )}
        href={href}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
);
