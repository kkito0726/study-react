import classes from "src/components/Footer/Footer.module.css";
import { Logo } from "public/vercel.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={classes.logo}>
          {/* <Image src={Logo} alt="Vercel Logo" width={72} height={16} /> */}
        </span>
      </a>
    </footer>
  );
}
