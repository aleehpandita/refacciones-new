import logo from "@/images/logo-1-1.png";

const bannerIcons = [
  "banner-icon-1-1.png",
  "banner-icon-1-3.png",
  "banner-icon-1-2.png",
  "banner-icon-1-4.png",
];

const socialIcons = [
  {
    id: 1,
    href: "#",
    icon: "fa fa-twitter",
  },
  {
    id: 2,
    href: "#",
    icon: "fa fa-facebook-f",
  },
  {
    id: 3,
    href: "#",
    icon: "fa fa-linkedin",
  },
  {
    id: 4,
    href: "#",
    icon: "fa fa-youtube-play",
  },
];

const footerData = {
  bannerIcons,
  logo,
  year: new Date().getFullYear(),
  website: "Refacciones y Servicios IXOYE",
  phone: "998 242 1057",
  email: "gpo.ixoye@gmail.com",
  address: "Av Xcaret, Mz. 2 Lote 2-03 \nPlaza Las Palmas Local A-1 y A-2, \n Supermanzana 36, 77505 \n Cancún, Q.R.",
  navItems: [
    {
      id: 1,
      title: "Nosotros",
      href: "#",
    },
    {
      id: 2,
      title: "Our Team",
      href: "#",
    },
    {
      id: 3,
      title: "Features",
      href: "#",
    },
    {
      id: 4,
      title: "Blog",
      href: "#",
    },
    {
      id: 5,
      title: "How It Works",
      href: "#",
    },
  ],
  services: [
    {
      id: 1,
      title: "Speed Optimization",
      href: "#",
    },
    {
      id: 2,
      title: "Marketing Analysis",
      href: "#",
    },
    {
      id: 3,
      title: "SEO and Backlinks",
      href: "#",
    },
    {
      id: 4,
      title: "Content Marketing",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      title: "Help",
      href: "#",
    },
    {
      id: 2,
      title: "Support",
      href: "#",
    },
    {
      id: 3,
      title: "Clients",
      href: "#",
    },
    {
      id: 4,
      title: "Contact",
      href: "#",
    },
  ],
  socialIcons,
};

export default footerData;
