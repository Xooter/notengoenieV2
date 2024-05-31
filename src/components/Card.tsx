import toast from "react-hot-toast";

interface CardProps {
  character: string;
}

export const Card = ({ character }: CardProps) => {
  const CopyCharacter = () => {
    navigator.clipboard.writeText(character);

    let emojis = ["✨", "❤️", "🔥", "🌟", "🎉", "🎈", "🎊", "🎀", "🌈", "🌸"];
    let rand = Math.floor(Math.random() * emojis.length);

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } px-5 shadow-lg rounded-xl bg-[#131313] flex justify-center items-center gap-2`}
      >
        <a>{emojis[rand]}</a>
        <a className="my-2">Copied to clipboard!</a>
      </div>
    ));
  };

  return (
    <div
      onClick={CopyCharacter}
      className="bg-primary dark:bg-primary-dark
      transition-transform ease-in-out
      hover:-translate-y-1 hover:cursor-pointer
      h-10 aspect-square rounded-lg flex justify-center items-center"
    >
      <a className="font-bold">{character}</a>
    </div>
  );
};
