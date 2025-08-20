import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
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
        id: 33,
        title: "Pricing",
        path: "/pricing",
        newTab: false,
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
        path: "/contact",
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
      {
        id: 85,
        title: "Forgot Password",
        path: "/forgot-password",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Account",
    newTab: false,
    submenu: [
      /*
      {
        id: 41,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      */
      /*
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      */
      {
        id: 46,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Profile",
        path: "/profile",
        newTab: false,
      },
      {
        id: 49,
        title: "Forgot Password",
        path: "/forgot-password",
        newTab: false,
      },
    ],
  },

  {
    id: 5,
    title: "Download",
    path: "/download",
    newTab: false,
  },
];
export default menuData;
