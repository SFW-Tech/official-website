import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "./components/HomePage/Topbar";

import underConstructionImage from "../../public/assets/underconstruction.webp";

import HeroSection from "./components/HomePage/HeroSection";
import Navbar from "./components/HomePage/Navbar";
import ClientsCardComponent from "./components/HomePage/ClientsCardComponent";
import Footer from "./components/Footer";
import AboutUsComponent from "./components/HomePage/AboutUsComponent";


export default function Home() {
  return (
    <>
      <Topbar />
      

      <HeroSection />

      <ClientsCardComponent/>

      <AboutUsComponent/>

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
