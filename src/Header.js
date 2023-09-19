import image1 from "./image1.png";

export default function Header() {
    return (
      <header className="App-header">
        <nav className="nav">
        <img src={image1} className="image1" alt="image1" />
        <h3>ReactFacts</h3>
        <ul className="nav-items">
        <li className="nav-li">Pricing</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Contact</li>
        </ul>
        </nav>
      </header>
    )
  }