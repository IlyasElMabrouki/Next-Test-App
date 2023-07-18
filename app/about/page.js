import Link from "next/link"
import styles from "./styles.module.css"

export default function About() {
  //throw new Error('Not Today!')
  return (
    <>
        <Link href="/">Link to Home</Link>
        <h1 className={styles.title}>About Page</h1>
    </>
  )
}
