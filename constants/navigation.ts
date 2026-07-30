export interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Features",
    href: "/#features",
  },
  {
    id: 2,
    label: "Pricing",
    href: "/#pricing",
  },
  {
    id: 3,
    label: "Reviews",
    href: "/#reviews",
  },
  {
    id: 4,
    label: "FAQs",
    href: "/#faqs",
  },
];
