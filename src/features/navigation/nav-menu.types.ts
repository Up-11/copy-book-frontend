export type MenuItemType = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export type MenuDataType = {
  items: MenuItemType[];
};
