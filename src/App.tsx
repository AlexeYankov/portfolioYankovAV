import "./App.css";
import Header from "./components/header/Header";
import BodyMain from "./components/body/BodyMain";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollToY] = useState<number>(window.pageYOffset);
  console.log(scrollY);

  const windowScroll = () => {
    setScrollToY(window.pageYOffset);
  };

  useEffect(() => {
    function setScrollY() {
      window.addEventListener("scroll", windowScroll);
    }
    // if (window.screen.width <= 1440) {
    //   setScrollToY(9999);
    // } else {
    //   setScrollY();
    // }
    setScrollY();
  });

  return (
    <div className="App">
      <Header />
      <BodyMain scrollStatus={scrollY} />
      <Footer />
    </div>
  );
}

export default App;
