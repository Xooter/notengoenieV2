interface CardProps {
  character: string;
}

export const Card = ({ character }: CardProps) => {
  const CopyCharacter = () => {
    navigator.clipboard.writeText(character);
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
