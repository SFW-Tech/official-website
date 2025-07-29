import Image from "next/image";
import styles from "./page.module.css";

import underConstructionImage from "../../public/assets/underconstruction.webp";
export default function Home() {
  return (
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
  );
}
