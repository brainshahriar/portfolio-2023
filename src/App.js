import "./App.scss";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GoogleAnalytics from "./utils.js/ganalytics";

function App() {
  return (
    <>
      <GoogleAnalytics />
      <div className="body">
        <div className="body__main">
          {" "}
          <div className="body__left">
            <LeftBar />
          </div>
          <div className="body__content">
            <Home />
          </div>
          <div className="body__right">
            <RightBar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
