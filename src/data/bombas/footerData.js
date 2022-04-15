import logo from "@/images/logo-1-1.png";

import whatsappLaundry from "@/data/bombas/whatsappLaundry";
const bannerIcons = [
  "banner-icon-1-1.png",
  "banner-icon-1-3.png",
  "banner-icon-1-2.png",
  "banner-icon-1-4.png",
];

const socialIcons = [
  {
    id: 1,
    href: "https://g.page/r/CQ4Ixb_D0mOPEAE",
    icon: "fa fa-google",
  },
  {
    id: 2,
    href: "#",
    icon: "fa fa-facebook-f",
  },
  {
    id: 3,
    href: `${whatsappLaundry.href}`,
    icon: "fa fa-whatsapp",
  },
];

const footerData = {
  bannerIcons,
  logo,
  year: new Date().getFullYear(),
  website: "Refacciones y Servicio IXOYE",
  phone: "998 242 1057",
  email: "gpo.ixoye@gmail.com",
  address: "Av Xcaret, Mz. 2 Lote 2-03 \nPlaza Las Palmas Local A-1 y A-2, \n Supermanzana 36, 77505 \n Cancún, Q.R.",
  navItems: [
    {
      id: 1,
      title: "Boiler",
      href: "tel:529982421057",
    },
    {
      id: 2,
      title: "Calentador",
      href: "tel:529982421057",
    },
    {
      id: 3,
      title: "Bombas",
      href: "tel:529982421057",
    },
    {
      id: 4,
      title: "Hidroneumaticos",
      href: "tel:529982421057",
    },
  ],
  services: [
    {
      id: 1,
      title: "Reparación",
      href: "tel:529982421057",
    },
    {
      id: 2,
      title: "Cambio de piezas",
      href: "tel:529982421057",
    },
    {
      id: 3,
      title: "Servicio Técnico",
      href: "tel:529982421057",
    },
    {
      id: 4,
      title: "Cambio de Valvula",
      href: "tel:529982421057",
    },
  ],
  links: [
    {
      id: 1,
      title: "Ayuda",
      href: "tel:529982421057",
    },
    {
      id: 2,
      title: "Servicio",
      href: "tel:529982421057",
    },
    {
      id: 3,
      title: "Refacciones",
      href: "tel:529982421057",
    },
    {
      id: 4,
      title: "Contacto",
      href: "tel:529982421057",
    },
  ],
  socialIcons,
};

export default footerData;
