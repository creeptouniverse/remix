import { Link } from "remix";
import logo from "../assets/logo.png"
import Header from "./Header";
import Road from "./Road"
import About from "./About"
import Footer from "./Footer";
import Contact from "./Contact"

export default function Index() {
  return (
<div>
  <Header />
  <About />
  <Road />
  <Contact />
  <Footer />
</div>
  );
}
