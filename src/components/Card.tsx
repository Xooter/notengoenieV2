interface CardProps {
  character: string;
}

export const Card = ({ character }: CardProps) => {
  return (
    <div className="bg-emerald-300 w-10 aspect-square flex justify-center items-center">
      {character}
    </div>
  );
};
