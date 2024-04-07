import Link from "next/link"
import styles from "./Layout.module.css"

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div>
      {children}
      </div>
      <footer className={styles.footer}>
        <a href="hhtps://google.com" target="_blank" rel="noreferred">
        </a>
        FastFood Next.js &copy;
      </footer>
    </>
  )
}

export default Layout
