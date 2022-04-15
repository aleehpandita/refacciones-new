import BannerOne from "@/components/bombas/BannerOne/BannerOne";
import BlogOne from "@/components/bombas/BlogOne/BlogOne";
import BrandOne from "@/components/bombas/BrandOne/BrandOne";
import BrandTwo from "@/components/bombas/BrandOne/BrandTwo";
import CtaOne from "@/components/bombas/CtaOne/CtaOne";
import CtaThree from "@/components/bombas/CtaThree/CtaThree";
import CtaTwo from "@/components/bombas/CtaTwo/CtaTwo";
import FunFactOne from "@/components/bombas/FunFactOne/FunFactOne";
import Layout from "@/components/bombas/Layout/Layout";
import PricingOne from "@/components/bombas/PricingOne/PricingOne";
import ServiceOne from "@/components/bombas/ServiceOne/ServiceOne";
import TestimonialOne from "@/components/bombas/TestimonialOne/TestimonialOne";
import bannerOne from "@/data/bombas/bannerOne";
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
