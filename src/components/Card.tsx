import toast from "react-hot-toast";
import { useFrencuencyContext } from "../context/FrecuencyContext";

interface CardProps {
  character: string;
  favorite?: boolean;
}

export const Card = ({ character, favorite = false }: CardProps) => {
  const { UpdateFrequency } = useFrencuencyContext();

  const CopyCharacter = () => {
    navigator.clipboard.writeText(character).then(() => {
      UpdateFrequency(character);
    });

    let emojis = ["✨", "❤️", "🔥", "🌟", "🎉", "🎈", "🎊", "🎀", "🌈", "🌸"];
    let rand = Math.floor(Math.random() * emojis.length);

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } px-5 shadow-lg rounded-xl dark:bg-[#131313] bg-background flex justify-center items-center gap-2`}
      >
        <a>{emojis[rand]}</a>
        <a className="my-2">Copied to clipboard!</a>
      </div>
    ));
  };

  return (
    <div
      onClick={CopyCharacter}
      className={` 
      ${favorite ? "rounded-full bg-background-dark dark:bg-background" : "rounded-lg bg-primary dark:bg-primary-dark"}
      ${favorite ? "text-primary dark:text-primary-dark shadow-md" : ""}
      transition-transform ease-in-out
      hover:-translate-y-1 hover:cursor-pointer
      h-10 aspect-square  flex justify-center items-center`}
    >
      <a className="font-bold">{character}</a>
    </div>
  );
};
