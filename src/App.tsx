import "./App.css";
import Header from "./components/header/Header";
import BodyMain from "./components/body/BodyMain";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";

function App() {
    let userWIndow = window.scrollY;
    if (window.screen.width <= 1440) {
        userWIndow = 9999;
    }
    const [scrollY, setScrollToY] = useState<number>(userWIndow);
    const windowScroll = () => {
        setScrollToY(window.scrollY);
    };

    useEffect(() => {
        function setScrollY() {
            window.addEventListener("scroll", windowScroll);
        }
        if (window.screen.width >= 1440) {
            setScrollY();
        }
    }, [scrollY]);

    return (
        <div className="App">
            <Header />
            <BodyMain scrollStatus={scrollY} />
            <Footer />
        </div>
    );
}

export default App;
