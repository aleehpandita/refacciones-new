import { useRootContext } from "@/context/context";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import SiteFooter from "pantallas/SiteFooter/SiteFooter";
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
        statusMessage="Servicio y Refacciones Pantallas"
        avatar="/favicon.png"
        notificationDelay={30000} // 1 minute
        notificationSound
        placeholder="Escribe tu mensaje"
        chatMessage='Hola!!! 🤝 Que tipo de refaccion o servicio necesitas?'
         />
      </main>
      
 </>     
)};

export default Layout;
