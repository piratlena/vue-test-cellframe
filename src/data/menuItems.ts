import type { MenuItems } from "@/components/the-menu/types";
import IconWallet from "@/components/icons/menu/IconWallet.vue";
import IconDex from "@/components/icons/menu/IconDex.vue";
import IconClock from "@/components/icons/menu/IconClock.vue";
import IconCertificate from "@/components/icons/menu/IconCertificate.vue";
import IconTokens from "@/components/icons/menu/IconTokens.vue";
import IconVpn from "@/components/icons/menu/IconVpn.vue";
import IconVpnService from "@/components/icons/menu/IconVpnService.vue";
import IconConsole from "@/components/icons/menu/IconConsole.vue";
import IconLogs from "@/components/icons/menu/IconLogs.vue";
import IconSettings from "@/components/icons/menu/IconSettings.vue";
import IconApps from "@/components/icons/menu/IconApps.vue";

export const menuItems: MenuItems[] = [
  { id: 0, title: "Wallet", icon: IconWallet, href: "#" },
  { id: 1, title: "DEX", icon: IconDex, href: "#" },
  { id: 2, title: "TX explorer", icon: IconClock, href: "#" },
  { id: 3, title: "Certificates", icon: IconCertificate, href: "#" },
  { id: 4, title: "Tokens", icon: IconTokens, href: "#" },
  { id: 5, title: "VPN client", icon: IconVpn, href: "#" },
  { id: 6, title: "VPN service", icon: IconVpnService, href: "#" },
  { id: 7, title: "Console", icon: IconConsole, href: "#" },
  { id: 8, title: "Logs", icon: IconLogs, href: "#" },

  { id: 9, title: "Settings", icon: IconSettings, href: "#" },
  { id: 10, title: "dApps", icon: IconApps, href: "#" },
];
