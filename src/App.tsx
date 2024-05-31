import { Toaster } from "react-hot-toast";
import { CharList } from "./components/CharList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="flex justify-center m-5">
      <Toaster />
      <div className={`max-w-[66%] flex flex-col gap-10`}>
        <Header />
        <CharList />
        <Footer />
      </div>
    </div>
  );
};
