interface CardProps {
  character: string;
}

export const Card = ({ character }: CardProps) => {
  return (
    <div className="bg-primary dark:bg-primary-dark h-10 rounded-lg  aspect-square flex justify-center items-center">
      <a>{character}</a>
    </div>
  );
};
