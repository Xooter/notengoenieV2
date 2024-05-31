interface CardProps {
  character: string;
}

export const Card = ({ character }: CardProps) => {
  return (
    <div className="bg-emerald-300 h-10 rounded-xl shadow-xl aspect-square flex justify-center items-center">
      <a className="select-none">{character}</a>
    </div>
  );
};
