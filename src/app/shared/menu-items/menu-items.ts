import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
     
      {
        state: 'Inventory',
        short_label: 'n',
        name: 'Inventory',
        type: 'link',
        icon: 'ti-wallet'
      },
      {
        state: 'Orders',
        short_label: 'n',
        name: 'Orders',
        type: 'link',
        icon: 'ti-package'
      },
      {
        state: 'Customers',
        short_label: 'n',
        name: 'Customers',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'Customers',
        short_label: 'n',
        name: 'Reports',
        type: 'link',
        icon: 'ti-save'
      },
      {
        state: 'Customers',
        short_label: 'n',
        name: 'Settings',
        type: 'link',
        icon: 'ti-settings'
      },
    ],
  },
  
 
  
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
