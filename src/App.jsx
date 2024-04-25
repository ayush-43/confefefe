import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Nominations, Speakers, GreenAwards, Highlights } from "./pages";
import FormfacadeEmbed from "@formfacade/embed-react";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nomination" element={<Nominations />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/greenawards" element={<GreenAwards />} />
        <Route path="/nominations" element={<Nominations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
