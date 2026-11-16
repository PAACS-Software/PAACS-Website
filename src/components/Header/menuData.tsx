import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "PAACS Mesh",
    path: "/mesh/",
    newTab: false,
  },
  {
    id: 7,
    title: "More Info",
    newTab: false,
    submenu: [
      {
        id: 2,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 6,
        title: "Documentation",
        path: "https://docs.paacs.pro",
        newTab: true,
      },
      {
        id: 71,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 72,
        title: "Our Mission",
        path: "/blog/paacs-mission",
        newTab: false,
      },
    ],
  },
  {
    id: 8,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 81,
        title: "Contact",
        path: "mailto:support@paacs.pro",
        newTab: false,
      },
      {
        id: 82,
        title: "Terms & Conditions",
        path: "/terms",
        newTab: false,
      },
      {
        id: 83,
        title: "Privacy Policy",
        path: "/privacy",
        newTab: false,
      },
      {
        id: 84,
        title: "Licensing",
        path: "/license",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Account",
    path: "/account/",
    newTab: false,
  },

];
export default menuData;
