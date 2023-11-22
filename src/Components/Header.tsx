import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${styles.headerStyle}`}>
      <h1>ABOUT ME</h1>
      <div className={`${styles.linkContainer}`}>
        <Link className={`${styles.linkStyle}`} href="/about">
          ABOUT
        </Link>
        <Link className={`${styles.linkStyle}`} href="/games">
          GAMES
        </Link>
        <Link className={`${styles.linkStyle}`} href="/pets">
          PETS
        </Link>
      </div>
    </div>
  );
}
