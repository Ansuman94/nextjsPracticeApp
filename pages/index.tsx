import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
export default function Home(homeProps: any) {
  return (
    <div>
      <div>Home page</div>
      <div>
        <Link href="author/about">about</Link>
      </div>
    </div>
  );
}
