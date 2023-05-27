import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="layer">
        <div className="wrapper">
          <div className="container">
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/users" className="nav-link">
                    Call API with UseEffect
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/ssr" className="nav-link">
                    Pre-rendering(SSR)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/context" className="nav-link">
                    Context API hook
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blogs" className="nav-link">
                    Dynamic Routing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
