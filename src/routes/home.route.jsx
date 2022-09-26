import About from "../components/about.component";
import ContactH from "../components/contactH.component";
import Home from "../components/home.component";
import Stats from "../components/stats.component";
import Testimonials from "../components/testimonials.component";
import Work from "../components/work.component";

export default function Main() {
  return (
    <div className="body-content-wrapper">
      <Home />
      <About />
      <Stats />
      <Work />
      <Testimonials />
      <ContactH />
    </div>
  );
}
