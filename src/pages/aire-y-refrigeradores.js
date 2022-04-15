import BannerOne from "@/components/aireyrefri/BannerOne/BannerOne";
import BlogOne from "@/components/aireyrefri/BlogOne/BlogOne";
import BrandOne from "@/components/aireyrefri/BrandOne/BrandOne";
import BrandTwo from "@/components/aireyrefri/BrandOne/BrandTwo";
import CtaOne from "@/components/aireyrefri/CtaOne/CtaOne";
import CtaThree from "@/components/aireyrefri/CtaThree/CtaThree";
import CtaTwo from "@/components/aireyrefri/CtaTwo/CtaTwo";
import FunFactOne from "@/components/aireyrefri/FunFactOne/FunFactOne";
import Layout from "@/components/aireyrefri/Layout/Layout";
import PricingOne from "@/components/aireyrefri/PricingOne/PricingOne";
import ServiceOne from "@/components/aireyrefri/ServiceOne/ServiceOne";
import TestimonialOne from "@/components/aireyrefri/TestimonialOne/TestimonialOne";
import bannerOne from "@/data/aireyrefri/bannerOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Refacciones A/C y Refrigeradores">
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
