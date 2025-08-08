import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "./components/HomePage/Topbar";

import underConstructionImage from "../../public/assets/underconstruction.webp";

import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import ClientsCardComponent from "./components/HomePage/ClientsCardComponent";
import Footer from "./components/HomePage/Footer";
import AboutUsComponent from "./components/HomePage/AboutUsComponent";
import OurServices from "./components/HomePage/OurServices";
import Calloutsection from "./components/HomePage/Calloutsection";
import CaseStudiesSection from "./components/HomePage/CaseStudiesSection";
import StaffAugmentation from "./components/HomePage/StaffAugmentation";
import Latestposts from "./components/HomePage/Latestposts";


export default function Home() {
  return (
    <>
      <Topbar />
      

      <HeroSection />

      <ClientsCardComponent/>

      <AboutUsComponent/>

      <OurServices/>

      <Calloutsection/>

      <CaseStudiesSection/>

      <StaffAugmentation/>

      <Latestposts/>

      <div className={styles.underconstruction}>
        <Image
          src={underConstructionImage}
          alt="Under Construction"
          width={500}
          height={500}
          className={styles.image}
        />
        <h3 className="text-8md font-bold">Site is under construction</h3>

      </div>

      <Footer/>
    </>

  );
}
