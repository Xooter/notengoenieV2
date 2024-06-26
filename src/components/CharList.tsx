import { characters } from "../constants/chars";
import { ipa_characters } from "../constants/ipa-chars";
import { Type, useCharsContext } from "../context/CharsContext";
import { Card } from "./Card";
import { FavoritesList } from "./FavoritesList";

export const CharList = () => {
  const { GetType } = useCharsContext();

  let visible_chars: string[] =
    GetType() == Type.Home ? characters : ipa_characters;

  return (
    <div id="fallback" className="flex flex-col gap-2 scale-down">
      <FavoritesList />
      <a className="font-light text-sm ml-auto mx-5">
        <strong>Click</strong> to copy
      </a>
      <div className="flex flex-wrap items-center gap-2 relative">
        {visible_chars.map((character: string, index: number) => (
          <Card character={character} key={index} />
        ))}
      </div>
    </div>
  );
};
