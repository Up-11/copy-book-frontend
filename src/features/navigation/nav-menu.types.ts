export type MenuItemType = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export type MenuDataType = {
  items: MenuItemType[];
};

export interface MenuItemsProps {
  items: MenuItemType[];
  icon: React.ReactNode;
  title: string;
  tallItemHref: string;
  description: string;
}
