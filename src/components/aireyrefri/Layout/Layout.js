import { useRootContext } from "@/context/context";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import SiteFooter from "../SiteFooter/SiteFooter";
import FloatingWhatsApp from 'react-floating-whatsapp'

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>
          {pageTitle} || IXOYE CENTRO DE SERVICIO Y REFACCIONES
        </title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper"
      >
        <Header pageTitle={pageTitle} />
        {children}
        <SiteFooter />
        <FloatingWhatsApp
        phoneNumber="529982421057"
        accountName="CENTRO IXOYE"
        allowClickAway
        notification
        statusMessage="Servicio y Refacciones"
        avatar="/favicon.png"
        notificationDelay={30000} // 1 minute
        notificationSound
        placeholder="Escribe tu mensaje"
        chatMessage='Hola!!! 🤝 Que tipo de refaccion o servicio necesitas?'
         />
      </main>
      <Link
          
          href="tel:9982421057"
          // smooth={true}
          // duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          passHref
        >
          <a href="tel:9982421057" target="_blank" rel="noreferrer" className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"><i className="fa fa-phone"></i> </a>
        </Link>
      
 </>     
)};

export default Layout;
