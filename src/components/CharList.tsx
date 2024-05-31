import { characters } from "../constants/chars";
import { Card } from "./Card";

export const CharList = () => {
  return (
    <div className="flex flex-col gap-4">
      <a>Tap o click para copiar / Tap or click to copy</a>
      <div className="flex flex-wrap items-center gap-2">
        {characters.map((character: string, index: number) => (
          <Card character={character} key={index} />
        ))}
      </div>
    </div>
  );
};
