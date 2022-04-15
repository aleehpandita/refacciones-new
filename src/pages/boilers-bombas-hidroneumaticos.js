import BannerOne from "@/components/pantallas/BannerOne/BannerOne";
import BlogOne from "@/components/pantallas/BlogOne/BlogOne";
import BrandOne from "@/components/pantallas/BrandOne/BrandOne";
import BrandTwo from "@/components/pantallas/BrandOne/BrandTwo";
import CtaOne from "@/components/pantallas/CtaOne/CtaOne";
import CtaThree from "@/components/pantallas/CtaThree/CtaThree";
import CtaTwo from "@/components/pantallas/CtaTwo/CtaTwo";
import FunFactOne from "@/components/pantallas/FunFactOne/FunFactOne";
import Layout from "@/components/pantallas/Layout/Layout";
import PricingOne from "@/components/pantallas/PricingOne/PricingOne";
import ServiceOne from "@/components/pantallas/ServiceOne/ServiceOne";
import TestimonialOne from "@/components/pantallas/TestimonialOne/TestimonialOne";
import bannerOne from "@/data/pantallas/bannerOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Refacciones Bombas, Hidros y Boilers">
      <BrandOne />
      <BrandTwo />
      <BannerOne bannerData={bannerOne} />
      <BrandOne />
      <ServiceOne />
      <CtaThree />
      <CtaTwo />
      <CtaOne />
      <PricingOne />
      <TestimonialOne />
      
      <FunFactOne />
      <BlogOne />
    </Layout>
  );
};

export default Home;
