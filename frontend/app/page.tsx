import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.section} ${styles.fightSection}`}>
          <Link href="/" className={styles.link}>
            <h1>FIGHTS</h1>
          </Link>
        </div>
        <div className={`${styles.section} ${styles.fighterSection}`}>
          <Link href="/fighters" className={styles.link}>
            <h1>FIGHTERS</h1>
          </Link>
        </div>
        <div className={`${styles.section} ${styles.rankingSection}`}>
          <Link href="/rankings" className={styles.link}>
            <h1>RANKINGS</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
