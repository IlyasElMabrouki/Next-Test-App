import Link from "next/link"
import Search from "./Search"

export default function NavBar() {
  return (
    <nav>
        <h1>
            <Link href="/">WikiRocket!</Link>
        </h1>
        <Search></Search>
    </nav>
  )
}
