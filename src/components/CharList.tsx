import { characters } from "../constants/chars";
import { Card } from "./Card";

export const CharList = () => {
  return (
    <div className="flex flex-col gap-2">
      <a className="font-light text-sm ml-auto mx-10">
        <strong>Click</strong> to copy
      </a>
      <div className="flex flex-wrap items-center gap-2">
        {characters.map((character: string, index: number) => (
          <Card character={character} key={index} />
        ))}
      </div>
    </div>
  );
};
