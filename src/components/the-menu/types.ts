import type { Component } from "vue";

export interface MenuItems {
  id: number;
  title: string;
  href: string;
  icon: Component;
}

export interface MenuItemsGroup {
  items: MenuItems[];
}
