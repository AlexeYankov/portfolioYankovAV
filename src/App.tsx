import "./App.css";
import Header from "./components/header/Header";
import BodyMain from "./components/body/BodyMain";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState<number>(window.pageYOffset);
  const windowScroll = () => {
    setScrollY(window.pageYOffset);
  };
  const smoothScroll = (speed: number, height: number) => {
    let i = speed || 10;
    // const y = i;
    // const h = y / 14;
    if (i <= height) {
      setTimeout(() => {
        window.scrollTo(0, i);
        smoothScroll(i + 80, height);
      }, 10);
    }
  };

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    const selectedSection = (id: string) => document.getElementById(id);
    anchors.forEach(function (el) {
      if (el.innerHTML === "Projects") {
        const selectedTag: HTMLElement = selectedSection(el.innerHTML)!;
        const positionY = selectedTag.getBoundingClientRect().top;
        if (positionY / 2 == 1896) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(40, positionY + 80);
          });
        } else {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(60, positionY + 0);
          });
        }
      }
      if (el.innerHTML === "About") {
        const selectedTag: HTMLElement = selectedSection(el.innerHTML)!;
        const positionY = selectedTag.getBoundingClientRect().top;
        if (positionY / 2 == 2796) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(40, positionY + 80);
          });
        } else {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(60, positionY + 20);
          });
        }
      }
      if (el.innerHTML === "Skills") {
        const selectedTag: HTMLElement = selectedSection(el.innerHTML)!;
        const positionY = selectedTag.getBoundingClientRect().top;
        console.log(positionY);
        if (positionY / 2 == 435) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(60, positionY);
          });
        } else {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(5)
            smoothScroll(60, positionY + 60);
          });
        }
        
      }
        // const tagPosition1 = el.getBoundingClientRect();
        // console.log(tagPosition1)
        // el.addEventListener("click", function (e) {
        //   e.preventDefault();
        //   smoothScroll(70, 870);
        // });
        // el.scrollIntoView(true)
      if (el.innerHTML === "Contacts") {
        const selectedTag: HTMLElement = selectedSection(el.innerHTML)!;
        const positionY = selectedTag.getBoundingClientRect().top;
        console.log(positionY);
        el.addEventListener("click", function (e) {
          e.preventDefault();
          smoothScroll(10, positionY);
        });
        // el.addEventListener("click", function (e) {
        //   e.preventDefault();
        //   smoothScroll(10, 3200);
        // });
      } else {
      }
    });
    function setScrollY() {
      window.addEventListener("scroll", windowScroll);
    }
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
