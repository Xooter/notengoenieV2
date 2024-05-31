import { CharList } from "./components/CharList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const MAX_WITH = "66%";

export const App = () => {
  return (
    <div className="flex justify-center m-5">
      <div className={`max-w-[${MAX_WITH}] flex flex-col gap-10`}>
        <Header />
        <CharList />
        <Footer />
      </div>
    </div>
  );
};
