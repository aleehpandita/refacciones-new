import logo from "@/images/logo-1-1.png";
import logo2 from "@/images/logo-2-1.png";
import whatsappLaundry from "@/data/bombas/whatsappLaundry";

const navbarData = {
  logo,
  logo2,
  rightBtn: {
    title: ``,
    href: `${whatsappLaundry.href}`,
  },
  navItems: [
    {
      id: 1,
      title: "Inicio",
      href: "#home",
      // subItems: [
      //   {
      //     id: 1,
      //     title: "Home One",
      //     href: "/",
      //   },
      //   {
      //     id: 2,
      //     title: "Home Two",
      //     href: "/home2",
      //   },
      // ],
    },
    {
      id: 2,
      title: "Refacciones",
      href: "#services",
    },
    {
      id: 3,
      title: "Servicios",
      href: "#screens",
    },
    {
      id: 4,
      title: "Marcas",
      href: "#pricing",
    }
    // {
    //   id: 4,
    //   title: "Manda un Whatsapp",
    //   href: `${whatsappLaundry.href}`,
    // },
    // {
    //   id: 5,
    //   title: "Marcas",
    //   href: "#blog",
    //   subItems: [
    //     {
    //       id: 1,
    //       title: "Blog Style 01",
    //       href: "/blog",
    //     },
    //     {
    //       id: 2,
    //       title: "Blog Details",
    //       href: "/blog-details",
    //     },
    //   ],
    // },
  ],
};

export default navbarData;
