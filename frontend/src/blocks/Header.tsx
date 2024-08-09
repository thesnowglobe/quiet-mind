import { Link } from "react-router-dom"
import chamomile from "../assets/chamomileicon.png"

function Header() {
  return (
    <header className="flex flex-row justify-between py-4 px-8 items-center">
      <Link to="/">
        <img src={chamomile} className="w-28"/>
      </Link>
      <nav className="flex gap-5">
        <Link to="/signin">
          <a className="text-2xl uppercase">sign in</a>
        </Link>
        <p className="text-2xl">/</p>
        <Link to="/signup">
          <a className="text-2xl uppercase">sign up</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header