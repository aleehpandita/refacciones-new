import BannerOne from "@/components/pantallas/BannerOne/BannerOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import BrandTwo from "@/components/BrandOne/BrandTwo";
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaThree from "@/components/CtaThree/CtaThree";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import bannerOne from "@/data/bannerOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Refacciones">
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
