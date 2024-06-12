import Link from "next/link"
import { Button } from "./ui/button"

//components
import { Nav } from "./Nav"


export function Header()  {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Gerson<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
            <Button className="bg-accent rounded-full hover:text-accent-hover">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          mobile nav
        </div>
      </div>
    </header>
  )
}
