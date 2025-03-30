import { Geist, Geist_Mono } from "next/font/google";

export const menuItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    imgSrc: "/images/homeIcon.svg", // Can be replaced with an S3 Image URL
  },
  {
    href: "/transactions",
    label: "Transactions",
    imgSrc: "/images/transactionsIcon.svg",
  },
  {
    href: "/creditcards",
    label: "Credit Cards",
    imgSrc: "/images/creditCardsIcon.svg",
  },
  {
    href: "/settings",
    label: "Settings",
    imgSrc: "/images/settingsIcon.svg",
  },
];

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const settingsTabs = ["Edit Profile", "Preferences", "Security"];
