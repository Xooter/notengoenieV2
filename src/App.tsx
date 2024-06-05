import { Toaster } from "react-hot-toast";
import { CharList } from "./components/CharList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-center m-5">
        <Toaster />
        <div className={`max-w-[66%] flex flex-col gap-10`}>
          <Header />

          {/* Rutas Disponibles */}
          <Routes>
            <Route path="*" element={<CharList />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
