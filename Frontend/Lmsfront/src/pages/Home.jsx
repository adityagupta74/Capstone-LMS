import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";

import UniversitySection from "../components/UniversitySection";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <UniversitySection></UniversitySection>
      <StatsSection></StatsSection>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
