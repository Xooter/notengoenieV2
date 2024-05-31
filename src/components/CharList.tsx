import { characters } from "../constants/chars";
import { Card } from "./Card";

export const CharList = () => {
  return (
    <div className="flex">
      {characters.map((character: string, index: number) => (
        <Card character={character} key={index} />
      ))}
    </div>
  );
};
