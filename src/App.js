import "./app/SCSS/style.scss";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./routes/home.route";
import Error from "./routes/error.route";
import Contact from "./routes/contact.route";
import Preloader from "./routes/preloader.route";
import { useEffect, useState } from "react";

AOS.init({
  once: true,
});

const App = () => {
  const [isLoaded, SetIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetIsLoaded(true);
    }, 2000);
  }, []);
  return !isLoaded ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
