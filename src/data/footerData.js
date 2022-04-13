import logo from "@/images/logo-1-1.png";

import whatsappLaundry from "@/data/whatsappLaundry";
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
      title: "Lavadoras",
      href: "#",
    },
    {
      id: 3,
      title: "Secadoras",
      href: "#",
    },
    {
      id: 4,
      title: "Marcas",
      href: "#",
    },
    {
      id: 5,
      title: "Centro de Lavado",
      href: "#",
    },
  ],
  services: [
    {
      id: 1,
      title: "Reparación",
      href: "#",
    },
    {
      id: 2,
      title: "Cambio de piezas",
      href: "#",
    },
    {
      id: 3,
      title: "Servicio Técnico",
      href: "#",
    },
    {
      id: 4,
      title: "Mantenimiento",
      href: "#",
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
