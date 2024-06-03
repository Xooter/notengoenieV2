import { createContext, useContext, useEffect, useState } from "react";

interface Frecuency {
  [x: string]: number;
}

const frecuencyContext = createContext<{
  UpdateFrequency: (char: string) => void;
  GetCharFrequency: () => Frecuency;
  SortCharsByFrequency: () => string[];
}>({
  UpdateFrequency: () => {},
  GetCharFrequency: (): Frecuency => {
    return {};
  },
  SortCharsByFrequency: (): string[] => {
    return [];
  },
});

export const FrecuencyContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [charFrequency, setCharFrequency] = useState<Frecuency>({});

  useEffect(() => {
    const chars = JSON.parse(localStorage.getItem("charFrequency") || "{}");
    setCharFrequency(chars);
  }, [setCharFrequency]);

  const GetCharFrequency = (): Frecuency => {
    return charFrequency;
  };

  const UpdateFrequency = (char: string) => {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
    setCharFrequency((prev) => ({ ...prev, [char]: charFrequency[char] }));
    localStorage.setItem("charFrequency", JSON.stringify(charFrequency));
  };

  const SortCharsByFrequency = (): string[] => {
    const charFrequency = GetCharFrequency();
    return Object.keys(charFrequency).sort(
      (a, b) => charFrequency[b] - charFrequency[a],
    );
  };

  return (
    <frecuencyContext.Provider
      value={{ UpdateFrequency, GetCharFrequency, SortCharsByFrequency }}
    >
      {children}
    </frecuencyContext.Provider>
  );
};

export const useFrencuencyContext = () => {
  return useContext(frecuencyContext);
};
