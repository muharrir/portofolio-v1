import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import illustration from "/peep.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Home</title>
      </Helmet>
      <Navbar />
      <div className="mx-6 md:mx-12 lg:mx-80">
        <div className="mt-40 md:mt-20 flex items-center ">
          {/* Left Content */}
          <div className="w-full md:w-1/2 items-center ">
            <h1 className="font-bold text-5xl">Halo, Saya Muharrir</h1>
            <p className="mt-10 tracking-widest text-lg">
              Saya seorang full-stack web developer berfokus untuk membuat web
              menjadi lebih cantik dan dinamis tentunya responsif juga.
            </p>
            <Link to="/contact">
              <button className="mt-10 bg-black shadow-black/50 shadow-lg text-white p-[14px] w-[35%] rounded-lg font-semibold text-lg hover:bg-black/95 hover:scale-105 ">
                Contact Me
              </button>
            </Link>
          </div>
          {/* Right Content */}
          <div className="w-1/2 hidden md:block">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
